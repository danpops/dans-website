import { createContext, useEffect, useState } from 'react'
import { Gain, LFO } from 'tone'
import Controls from './Controls'
import { SoundGenerator } from './SoundGenerator'
import useWaveform from '@/hooks/useWaveform'
import { Analyzer } from '../Synth/Analyzer'
import { generateNotes } from '@/lib/dataUtils'
import Sequencer from './Sequencer'
import LFOControl from './LFOControl'
export const SynthContext = createContext()

export default function SynthController (props) {
  const defaultOptions = {
    oscillator: 'triangle',
    detune: 0,
    volume: -3,
    octave: 3,
    attack: 0.25,
    decay: 0.0,
    sustain: 1,
    release: 0.5
  }
  const [options, setOptions] = useState(defaultOptions)
  const [notes, setNotes] = useState(generateNotes(18, options.octave))
  const [gain, setGain] = useState(null)
  const { Waveform } = useWaveform()

  useEffect(() => setNotes(generateNotes(18, options.octave)), [options.octave])

  useEffect(() => setGain(new Gain(0.8).toDestination()), [])

  const context = {
    notes,
    setNotes,
    options,
    setOptions,
    gain,
    setGain
  }

  return (
    <SynthContext.Provider value={context}>
      <SoundGenerator />
      <Analyzer waveform={Waveform} />
      <Sequencer />
      <Controls />
      <LFOControl />
    </SynthContext.Provider>
  )
}
