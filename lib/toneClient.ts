'use client';

import * as Tone from 'tone';

export type InstrumentName = 'keys' | 'bass' | 'drums' | 'pad';

type ToneState = {
  synth: Tone.PolySynth | null;
  bass: Tone.MonoSynth | null;
  drums: Tone.MembraneSynth | null;
  pad: Tone.Synth | null;
  initialized: boolean;
};

const toneState: ToneState = {
  synth: null,
  bass: null,
  drums: null,
  pad: null,
  initialized: false
};

export async function initTone() {
  if (toneState.initialized) {
    return;
  }

  await Tone.start();

  toneState.synth = new Tone.PolySynth(Tone.Synth).toDestination();
  toneState.bass = new Tone.MonoSynth({
    oscillator: { type: 'square' },
    filter: { type: 'lowpass', rolloff: -12, Q: 1 }
  }).toDestination();
  toneState.drums = new Tone.MembraneSynth({ pitchDecay: 0.008 }).toDestination();
  toneState.pad = new Tone.Synth({
    oscillator: { type: 'sine' },
    envelope: { attack: 1.2, decay: 0.3, sustain: 0.7, release: 1.5 }
  }).toDestination();

  toneState.initialized = true;
}

export function triggerInstrument(instrument: InstrumentName, note: string, duration = '8n') {
  if (!toneState.initialized) {
    return;
  }

  switch (instrument) {
    case 'keys':
      toneState.synth?.triggerAttackRelease(note, duration);
      break;
    case 'bass':
      toneState.bass?.triggerAttackRelease(note, duration);
      break;
    case 'drums':
      toneState.drums?.triggerAttackRelease(note, duration);
      break;
    case 'pad':
      toneState.pad?.triggerAttackRelease(note, duration);
      break;
    default:
      break;
  }
}

export function disposeTone() {
  toneState.synth?.dispose();
  toneState.bass?.dispose();
  toneState.drums?.dispose();
  toneState.pad?.dispose();
  toneState.initialized = false;
}
