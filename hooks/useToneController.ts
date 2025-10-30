'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import type { InstrumentName } from '@/lib/toneClient';
import { disposeTone, initTone, triggerInstrument } from '@/lib/toneClient';

type Step = {
  note: string;
  active: boolean;
};

type Pattern = Record<number, Record<InstrumentName, Step>>;

const NOTES: Record<InstrumentName, string[]> = {
  keys: ['C4', 'E4', 'G4', 'B4'],
  bass: ['C2', 'E2', 'G2', 'B1'],
  drums: ['C2', 'D2', 'E2', 'G2'],
  pad: ['C3', 'D#3', 'G3', 'A#3']
};

export function useToneController(bpm = 100) {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(bpm);
  const [currentStep, setCurrentStep] = useState(0);
  const [patterns, setPatterns] = useState<Pattern>(() => {
    return Array.from({ length: 8 }, (_, stepIndex) => {
      return {
        [stepIndex]: Object.fromEntries(
          (Object.keys(NOTES) as InstrumentName[]).map((instrument) => [
            instrument,
            {
              note: NOTES[instrument][stepIndex % NOTES[instrument].length],
              active: stepIndex % 2 === 0
            }
          ])
        ) as Record<InstrumentName, Step>
      };
    }).reduce((acc, stepPattern) => ({ ...acc, ...stepPattern }), {} as Pattern);
  });

  const toggleStep = useCallback((stepIndex: number, instrument: InstrumentName) => {
    setPatterns((prev) => {
      const step = prev[stepIndex]?.[instrument];

      return {
        ...prev,
        [stepIndex]: {
          ...prev[stepIndex],
          [instrument]: {
            note: step?.note ?? NOTES[instrument][0],
            active: !step?.active
          }
        }
      };
    });
  }, []);

  const changeNote = useCallback((stepIndex: number, instrument: InstrumentName, note: string) => {
    setPatterns((prev) => ({
      ...prev,
      [stepIndex]: {
        ...prev[stepIndex],
        [instrument]: {
          note,
          active: prev[stepIndex]?.[instrument]?.active ?? true
        }
      }
    }));
  }, []);

  const steps = useMemo(() => Object.keys(patterns).map(Number), [patterns]);

  useEffect(() => {
    initTone().then(() => setIsReady(true));

    return () => {
      setIsPlaying(false);
      disposeTone();
    };
  }, []);

  useEffect(() => {
    if (!isReady || !isPlaying) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % steps.length;
        const nextPattern = patterns[next];

        (Object.keys(nextPattern ?? {}) as InstrumentName[]).forEach((instrument) => {
          const step = nextPattern?.[instrument];
          if (step?.active) {
            triggerInstrument(instrument, step.note);
          }
        });

        return next;
      });
    }, (60_000 / tempo) / 2);

    return () => clearInterval(interval);
  }, [isPlaying, isReady, patterns, steps.length, tempo]);

  const handlePlayToggle = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  return {
    isReady,
    isPlaying,
    tempo,
    setTempo,
    currentStep,
    steps,
    patterns,
    toggleStep,
    changeNote,
    handlePlayToggle
  };
}
