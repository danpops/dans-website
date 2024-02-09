import * as Tone from 'tone'
import useWaveform from '@/hooks/useWaveform'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export const SYNTH_NOTES = {
  C4: 261.63,
  Db4: 277.18,
  D4: 293.66,
  Eb4: 311.13,
  E4: 329.63,
  F4: 349.23,
  Gb4: 369.99,
  G4: 392.0,
  Ab4: 415.3,
  A4: 440,
  Bb4: 466.16,
  B4: 493.88
}
export default function useSynthNote () {
  const [isPlaying, setIsPlaying] = useState(false)
  const [synth, setSynth] = useState(null)
  const [synthVibrato, setSynthVibrato] = useState(null)
  const [synthTremolo, setSynthTremolo] = useState(null)
  const [synthVolume, setSynthVolume] = useState(null)
  const [activeNote, setActiveNote] = useState('C4')
  const [oscillatorType, setOscillatorType] = useState('sine')
  const [frequency, setFrequency] = useState(300)
  const [freqAM, setFreqAM] = useState(0)
  const [freqFM, setFreqFM] = useState(0)
  const [volume, setVolume] = useState(-12.5)

  const router = useRouter()
  const { Waveform } = useWaveform()

  useEffect(() => {
    const newSynthVolume = new Tone.Volume(volume).toDestination()
    const tremolo = { frequency: 0, depth: 1, spread: 0 }
    const vibrato = { frequency: 0, depth: 1, wet: 0 }
    const oscillator = { type: 'sine', frequency: 300 }
    const envelope = { attack: 0.5, decay: 0.0, sustain: 1, release: 0.1 }
    const synthConfig = { volume: -8, oscillator, envelope }
    const newSynthTremolo = new Tone.Tremolo(tremolo).connect(newSynthVolume)
    const newSynthVibrato = new Tone.Vibrato(vibrato).connect(newSynthTremolo)
    const newSynth = new Tone.Synth(synthConfig).connect(newSynthVibrato)

    setSynthVolume(newSynthVolume)
    setSynthTremolo(newSynthTremolo)
    setSynthVibrato(newSynthVibrato)
    setSynth(newSynth)

    Tone.start()

    return () => {
      // Clean up the synth when the component unmounts
      if (synth) synth.dispose()
      if (synthTremolo) synthTremolo.dispose()
      if (synthVibrato) synthVibrato.dispose()
      if (synthVolume) synthVolume.dispose()
    }
  }, [])

  useEffect(() => {
    const handleRouteChange = () => {
      if (isPlaying) stopSynth()
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [isPlaying])

  function toggleSynth () {
    if (!isPlaying) playSynth()
    else stopSynth()
  }
  function playSynth () {
    synth.triggerAttack(activeNote)
    synthTremolo.start()
    synthTremolo.wet.linearRampTo(1, 0.1, Tone.now())
    synthVibrato.wet.linearRampTo(1, 0.1, Tone.now())
    synthTremolo.depth.linearRampTo(1, 0.1, Tone.now())
    synthVibrato.depth.linearRampTo(1, 0.1, Tone.now())
    setIsPlaying(true)
  }
  function stopSynth () {
    synth.triggerRelease()
    synthTremolo.wet.linearRampTo(0, 0.1, Tone.now())
    synthVibrato.wet.linearRampTo(0, 0.1, Tone.now())
    synthTremolo.depth.linearRampTo(0, 0.1, Tone.now())
    synthVibrato.depth.linearRampTo(0, 0.1, Tone.now())
    synthTremolo.stop()
    setIsPlaying(false)
  }
  function changeFrequency (value) {
    setActiveNote(null)
    setFrequency(value)
    if (synth) {
      synth.oscillator.frequency.setValueAtTime(value, 0)
    }
  }
  function changeAM (e) {
    synthTremolo.frequency.value = e
    setFreqAM(e)
  }
  function changeFM (e) {
    synthVibrato.frequency.value = e
    setFreqFM(e)
  }
  function changeOscillator (type) {
    setOscillatorType(type)
    if (synth) {
      synth.oscillator.type = type
    }
  }
  function changeSynthNote (note) {
    const value = SYNTH_NOTES[note]
    setActiveNote(note)
    setFrequency(value)
    synth.oscillator.frequency.setValueAtTime(value, 0)
  }
  function changeSynthVolume (e) {
    synthVolume.volume.linearRampTo(e, 0.1, Tone.now())
    setVolume(e)
  }

  return {
    Waveform,
    activeNote,
    changeAM,
    changeFM,
    changeFrequency,
    changeOscillator,
    changeSynthNote,
    changeSynthVolume,
    frequency,
    freqAM,
    freqFM,
    isPlaying,
    oscillatorType,
    toggleSynth,
    volume
  }
}
