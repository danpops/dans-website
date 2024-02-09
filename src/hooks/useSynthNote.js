import * as Tone from 'tone'
import useWaveform from '@/hooks/useWaveform'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function useSynthNote () {
  const [isPlaying, setIsPlaying] = useState(false)
  const [synth, setSynth] = useState(null)
  const [synthVibrato, setSynthVibrato] = useState(null)
  const [synthTremolo, setSynthTremolo] = useState(null)
  const [oscillatorType, setOscillatorType] = useState('sine')
  const [frequency, setFrequency] = useState(300)
  const [freqAM, setFreqAM] = useState(0)
  const [freqFM, setFreqFM] = useState(0)

  const router = useRouter()
  const { Waveform } = useWaveform()

  useEffect(() => {
    const synthVolume = new Tone.Volume(0).toDestination()
    const tremolo = { frequency: 0, depth: 1, spread: 0 }
    const vibrato = { frequency: 0, depth: 1, wet: 0 }
    const oscillator = { type: 'sine', frequency: 300 }
    const envelope = { attack: 0.5, decay: 0.0, sustain: 1, release: 0.1 }
    const synthConfig = { volume: -8, oscillator, envelope }
    const newSynthTremolo = new Tone.Tremolo(tremolo).connect(synthVolume)
    const newSynthVibrato = new Tone.Vibrato(vibrato).connect(newSynthTremolo)
    const newSynth = new Tone.Synth(synthConfig).connect(newSynthVibrato)

    setSynthTremolo(newSynthTremolo)
    setSynthVibrato(newSynthVibrato)
    setSynth(newSynth)

    Tone.start()

    return () => {
      // Clean up the synth when the component unmounts
      if (synth) synth.dispose()
      if (synthTremolo) synthTremolo.dispose()
      if (synthVibrato) synthVibrato.dispose()
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
    synth.triggerAttack(synth.frequency.value)
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
  function adjustFrequency (value) {
    setFrequency(value)
    if (synth) {
      synth.oscillator.frequency.value = value
    }
  }
  const changeAM = e => {
    synthTremolo.frequency.value = e
    setFreqAM(e)
  }
  const changeFM = e => {
    synthVibrato.frequency.value = e
    setFreqFM(e)
  }
  const handleOscillatorChange = type => {
    setOscillatorType(type)
    if (synth) {
      synth.oscillator.type = type
    }
  }

  return {
    Waveform,
    adjustFrequency,
    changeAM,
    changeFM,
    frequency,
    freqAM,
    freqFM,
    handleOscillatorChange,
    isPlaying,
    oscillatorType,
    toggleSynth
  }
}
