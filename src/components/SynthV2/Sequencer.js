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

export default function Sequencer () {
  const [playing, setPlaying] = useState(false)
  const [tempo, setTempo] = useState(120)
  const { options, gain } = useContext(SynthContext)
  const synth = useSynth(options)

  const handleClick = useCallback(() => {
    setPlaying(!playing)
  }, [playing])

  const updateTempo = value => {
    setTempo(value)
    Tone.Transport.bpm.value = value
  }

  useEffect(() => {
    if (!synth || !gain) {
      return
    }
    Tone.start()
    synth.connect(gain)
    const seq = new Tone.Sequence(
      (time, note) => {
        if (note === '_') {
          return
        }
        let octave = note.replace(/[^0-9-]/gi, '') // get octave
        note = note.replace(/[0-9-]/gi, '') // remove octave
        octave = options.octave + Number(octave) // add octaves
        synth.triggerAttackRelease(note + octave, 0.1, time) // play note
      },
      ['E0', ['E0', '_', 'E0'], 'G0', ['A0', 'G0']]
    ) // subdivisions are given as subarrays

    if (playing) {
      seq.start(0)
      Tone.Transport.start()
    }

    return () => {
      seq.stop()
      Tone.Transport.stop()
    }
  }, [playing, options, gain, synth])

  return (
    <EffectContainer>
      <ControlContainer>
        <ToggleContainer>
          <SynthToggle label='Play' active={playing} onClick={handleClick} />
        </ToggleContainer>
      </ControlContainer>
      {playing && (
        <GroupBox groupLabel='Synth'>
          <SynthSlider
            label='Tempo'
            min='1'
            max='250'
            step='0.1'
            value={tempo}
            onChange={e => updateTempo(parseFloat(e.target.value))}
          />
        </GroupBox>
      )}
    </EffectContainer>
  )
}
