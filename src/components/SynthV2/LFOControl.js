import { useCallback, useContext, useEffect, useState } from 'react'
import { SynthContext } from '.'
import {
  ControlContainer,
  EffectContainer,
  ToggleContainer
} from '../Synth/styles'
import { SynthSlider, SynthToggle } from '../Synth'
import { useSynth } from '@/hooks/useSynth'
import * as Tone from 'tone'
import GroupBox from '../GroupBox'

export default function LFOControl () {
  const [active, setActive] = useState(false)
  const [tremolo, setTremolo] = useState(null)
  const [vibrato, setVibrato] = useState(null)
  const [freqAM, setFreqAM] = useState(0)
  const [freqFM, setFreqFM] = useState(0)
  const { options, gain } = useContext(SynthContext)
  const synth = useSynth(options)

  useEffect(() => {
    if (!synth || !gain) {
      return
    }
    const tremolo = new Tone.Tremolo({
      frequency: 0,
      depth: 0,
      spread: 0
    }).connect(gain)
    const vibrato = new Tone.Vibrato({
      frequency: 0,
      depth: 0,
      wet: 0
    }).connect(tremolo)

    setTremolo(tremolo)
    setVibrato(vibrato)

    // Cleanup function
    return () => {
      tremolo.dispose()
      vibrato.dispose()
    }
  }, [active, options, gain, synth])

  useEffect(() => {
    if (vibrato === null) return
    synth.connect(vibrato)
  }, [synth, vibrato])

  function toggleLFO () {
    if (!active) startLFO()
    else stopLFO()
  }

  function startLFO () {
    tremolo.start()
    tremolo.wet.linearRampTo(1, 0.1, Tone.now())
    vibrato.wet.linearRampTo(1, 0.1, Tone.now())
    tremolo.depth.linearRampTo(1, 0.1, Tone.now())
    vibrato.depth.linearRampTo(1, 0.1, Tone.now())
    setActive(true)
  }
  function stopLFO () {
    tremolo.wet.linearRampTo(0, 0.1, Tone.now())
    vibrato.wet.linearRampTo(0, 0.1, Tone.now())
    tremolo.depth.linearRampTo(0, 0.1, Tone.now())
    vibrato.depth.linearRampTo(0, 0.1, Tone.now())
    tremolo.stop()
    setActive(false)
  }

  function changeAM (e) {
    tremolo.frequency.value = e
    setFreqAM(e)
  }
  function changeFM (e) {
    vibrato.frequency.value = e
    setFreqFM(e)
  }

  return (
    <EffectContainer>
      <ControlContainer>
        <ToggleContainer>
          <SynthToggle label='LFO' active={active} onClick={toggleLFO} />
        </ToggleContainer>
      </ControlContainer>
      {active && (
        <GroupBox groupLabel='LFO'>
          <SynthSlider
            label='Amplitude Modulation'
            min='0'
            max='25'
            step='0.1'
            value={freqAM}
            onChange={e => changeAM(parseFloat(e.target.value))}
          />
          <SynthSlider
            label='Frequency Modulation'
            min='0'
            max='30'
            step='0.1'
            value={freqFM}
            onChange={e => changeFM(parseFloat(e.target.value))}
          />
        </GroupBox>
      )}
    </EffectContainer>
  )
}
