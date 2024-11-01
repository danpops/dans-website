import {
  PiWaveSawtooth,
  PiWaveSquare,
  PiWaveSine,
  PiWaveTriangle
} from 'react-icons/pi'
import useWaveform from '@/hooks/useWaveform'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { generateRandomNotes } from '@/lib/dataUtils'
import { SYNTH_NOTES } from '@/lib/constant'
import dynamic from 'next/dynamic'

const Tone = dynamic(() => import('tone').then(mod => mod), { ssr: false })

export const OSCILLATORS = [
  { value: 'triangle', label: 'Triangle', icon: <PiWaveTriangle size={25} /> },
  { value: 'sine', label: 'Sine', icon: <PiWaveSine size={25} /> },
  { value: 'sawtooth', label: 'Sawtooth', icon: <PiWaveSawtooth size={25} /> },
  { value: 'square', label: 'Square', icon: <PiWaveSquare size={25} /> }
]
export default function useSynthNote () {
  const [isPlaying, setIsPlaying] = useState(false)
  const [lfoStatus, setLFOStatus] = useState(false)
  const [notesVisible, setNotesVisible] = useState(false)
  const [synth, setSynth] = useState(null)
  const [synthVibrato, setSynthVibrato] = useState(null)
  const [synthTremolo, setSynthTremolo] = useState(null)
  const [synthVolume, setSynthVolume] = useState(null)
  const [activeNote, setActiveNote] = useState('C4')
  const [activeNoteIndex, setActiveNoteIndex] = useState(0)
  const [noteLength, setNoteLength] = useState('8n')
  const [oscillatorType, setOscillatorType] = useState('triangle')
  const [frequency, setFrequency] = useState(197.6)
  const [freqAM, setFreqAM] = useState(0)
  const [freqFM, setFreqFM] = useState(0)
  const [volume, setVolume] = useState(-10.8)
  const [tempo, setTempo] = useState(120)
  const [sequenceNotes, setSequenceNotes] = useState(null)

  const router = useRouter()
  const { Waveform } = useWaveform()

  useEffect(() => {
    const newSynthVolume = new Tone.Volume(volume).toDestination()
    const tremolo = { frequency: 0, depth: 0, spread: 0 }
    const vibrato = { frequency: 0, depth: 0, wet: 0 }
    const oscillator = { type: oscillatorType, frequency: 300 }
    const envelope = { attack: 1, decay: 0.0, sustain: 1, release: 0.5 }
    const synthConfig = { volume: -8, oscillator, envelope }
    const newSynthTremolo = new Tone.Tremolo(tremolo).connect(newSynthVolume)
    const newSynthVibrato = new Tone.Vibrato(vibrato).connect(newSynthTremolo)
    const newSynth = new Tone.Synth(synthConfig).connect(newSynthVibrato)
    const randomNotes = generateRandomNotes(4)

    setSequenceNotes(randomNotes)
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
    if (synth === null) return
    synth.connect(synthVibrato)
    let index = activeNoteIndex > 0 ? activeNoteIndex : 0
    const repeat = (time, note) => {
      setActiveNote(note)
      setActiveNoteIndex(index)
      index = (index + 1) % sequenceNotes.length
      synth.triggerAttackRelease(note, noteLength, time)
    }
    const seq = new Tone.Sequence(repeat, sequenceNotes)
    if (isPlaying) {
      Tone.Transport.bpm.value = tempo
      seq.start(0)
      Tone.Transport.start()
    }
    return () => {
      seq.stop()
      Tone.Transport.stop()
    }
  }, [isPlaying, synth, synthVibrato, noteLength, sequenceNotes])

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
  function toggleLFO () {
    if (!lfoStatus) startLFO()
    else stopLFO()
  }
  function toggleNotes () {
    setNotesVisible(!notesVisible)
  }
  function toggleNoteLength (length) {
    setNoteLength(length)
  }
  function playSynth () {
    Tone.start()
    setIsPlaying(true)
  }
  function stopSynth () {
    synth.triggerRelease()
    stopLFO()
    setIsPlaying(false)
  }
  function startLFO () {
    synthTremolo.start()
    synthTremolo.wet.linearRampTo(1, 0.1, Tone.now())
    synthVibrato.wet.linearRampTo(1, 0.1, Tone.now())
    synthTremolo.depth.linearRampTo(1, 0.1, Tone.now())
    synthVibrato.depth.linearRampTo(1, 0.1, Tone.now())
    setLFOStatus(true)
  }
  function stopLFO () {
    synthTremolo.wet.linearRampTo(0, 0.1, Tone.now())
    synthVibrato.wet.linearRampTo(0, 0.1, Tone.now())
    synthTremolo.depth.linearRampTo(0, 0.1, Tone.now())
    synthVibrato.depth.linearRampTo(0, 0.1, Tone.now())
    synthTremolo.stop()
    setLFOStatus(false)
  }
  function randomizeLoop () {
    const notes = generateRandomNotes(4)
    setSequenceNotes(notes)
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
  function changeTempo (value) {
    setTempo(value)
    if (synth) {
      Tone.Transport.bpm.value = value
    }
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
    setFrequency(value)
    setActiveNote(note)
    if (isPlaying) {
      synth.oscillator.frequency.setValueAtTime(value, 0)
    } else {
      synth.triggerAttackRelease(note, noteLength)
    }
  }
  const changeSequenceNote = (index, newValue) => {
    setSequenceNotes(prevArray => {
      const newArray = [...prevArray]
      newArray[index] = newValue
      return newArray
    })
  }
  function changeSynthVolume (e) {
    synthVolume.volume.linearRampTo(e, 0.1, Tone.now())
    setVolume(e)
  }

  return {
    Waveform,
    activeNote,
    activeNoteIndex,
    changeAM,
    changeFM,
    changeFrequency,
    changeOscillator,
    changeSequenceNote,
    changeSynthNote,
    changeSynthVolume,
    changeTempo,
    frequency,
    freqAM,
    freqFM,
    isPlaying,
    lfoStatus,
    noteLength,
    notesVisible,
    oscillatorType,
    randomizeLoop,
    sequenceNotes,
    tempo,
    toggleLFO,
    toggleNoteLength,
    toggleNotes,
    toggleSynth,
    volume
  }
}
