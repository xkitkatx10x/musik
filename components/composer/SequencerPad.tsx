'use client';

import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useToneController } from '@/hooks/useToneController';
import type { InstrumentName } from '@/lib/toneClient';
import { Button } from '@/components/ui/Button';

const instruments: InstrumentName[] = ['keys', 'pad', 'bass', 'drums'];

const NOTE_CHOICES: Record<InstrumentName, string[]> = {
  keys: ['C4', 'D4', 'E4', 'G4', 'A4'],
  pad: ['C3', 'D#3', 'F3', 'G3', 'A#3'],
  bass: ['C2', 'D2', 'E2', 'G2', 'A2'],
  drums: ['C2', 'D2', 'E2', 'G2']
};

export function SequencerPad() {
  const { isReady, isPlaying, tempo, setTempo, steps, patterns, currentStep, toggleStep, changeNote, handlePlayToggle } =
    useToneController(96);

  const tempoMarks = useMemo(() => [72, 96, 110, 128, 140], []);

  return (
    <div className="glass-panel flex flex-col gap-8 rounded-[2.5rem] p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-2xl text-white">Sequencer Playground</h3>
          <p className="text-sm text-slate-300">Tap to activate steps, adjust notes, and sculpt grooves in real time.</p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-xs uppercase tracking-wider text-slate-400">Tempo</label>
          <select
            className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white"
            onChange={(event) => setTempo(Number(event.target.value))}
            value={tempo}
          >
            {tempoMarks.map((mark) => (
              <option key={mark}>{mark}</option>
            ))}
          </select>
          <Button intent={isPlaying ? 'secondary' : 'primary'} onClick={handlePlayToggle}>
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-4">
          <thead>
            <tr>
              <th className="text-left text-xs font-semibold uppercase tracking-wider text-slate-400">Layer</th>
              {steps.map((stepIndex) => (
                <th key={stepIndex} className="text-center text-xs text-slate-500">
                  {stepIndex + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {instruments.map((instrument) => (
              <tr key={instrument}>
                <td className="whitespace-nowrap text-sm font-semibold capitalize text-slate-200">{instrument}</td>
                {steps.map((stepIndex) => {
                  const step = patterns[stepIndex]?.[instrument];

                  return (
                    <td key={stepIndex}>
                      <button
                        className={`relative block h-16 w-16 rounded-2xl border transition-all ${
                          step?.active
                            ? 'border-accent/70 bg-accent/20 shadow-[0_0_15px_rgba(34,211,238,0.35)]'
                            : 'border-white/10 bg-white/5'
                        } ${currentStep === stepIndex ? 'ring-2 ring-accent/80 ring-offset-2 ring-offset-slate-950' : ''}`}
                        disabled={!isReady}
                        onClick={() => toggleStep(stepIndex, instrument)}
                        type="button"
                      >
                        <AnimatePresence>
                          {step?.active ? (
                            <motion.span
                              animate={{ opacity: 1, scale: 1 }}
                              className="absolute inset-2 rounded-xl bg-gradient-to-br from-accent/40 via-primary/30 to-secondary/40"
                              exit={{ opacity: 0, scale: 0.85 }}
                              initial={{ opacity: 0, scale: 0.85 }}
                            />
                          ) : null}
                        </AnimatePresence>
                        <select
                          aria-label="Note selection"
                          className="absolute bottom-2 left-1/2 z-10 w-14 -translate-x-1/2 rounded-full border border-white/10 bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-wider text-white shadow-glass"
                          onChange={(event) => changeNote(stepIndex, instrument, event.target.value)}
                          value={step?.note}
                        >
                          {NOTE_CHOICES[instrument].map((note) => (
                            <option key={`${stepIndex}-${instrument}-${note}`}>{note}</option>
                          ))}
                        </select>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
