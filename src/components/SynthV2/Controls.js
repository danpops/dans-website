import { useContext } from 'react'
import { SynthContext } from '.'
import { Button, ControlContainer, OscillatorContainer } from '../Synth/styles'
import { SynthSlider, SynthToggle } from '../Synth'
import { OSCILLATORS } from '@/hooks/useSynthNote'
import GroupBox from '../GroupBox'

export default function Controls () {
  const { options, setOptions } = useContext(SynthContext)

  const updateOption = (prop, val) => {
    setOptions({ ...options, [prop]: val })
  }

  return (
    <ControlContainer>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <Button onClick={() => updateOption('octave', options.octave - 1)}>
          -
        </Button>
        {options.octave}
        <Button onClick={() => updateOption('octave', options.octave + 1)}>
          +
        </Button>
      </div>
      <OscillatorContainer>
        {OSCILLATORS.map(item => (
          <SynthToggle
            key={item.label}
            label={item.icon}
            active={options.oscillator === item.value}
            onClick={() => updateOption('oscillator', item.value)}
          />
        ))}
      </OscillatorContainer>
      <GroupBox groupLabel='Synth'>
        <SynthSlider
          label='Attack'
          min='0'
          max='1'
          step='0.01'
          value={options.attack}
          onChange={e => updateOption('attack', parseFloat(e.target.value))}
        />
        <SynthSlider
          label='Decay'
          min='0'
          max='1'
          step='0.01'
          value={options.decay}
          onChange={e => updateOption('decay', parseFloat(e.target.value))}
        />
        <SynthSlider
          label='Sustain'
          min='0'
          max='1'
          step='0.01'
          value={options.sustain}
          onChange={e => updateOption('sustain', parseFloat(e.target.value))}
        />
        <SynthSlider
          label='Release'
          min='0'
          max='1'
          step='0.01'
          value={options.release}
          onChange={e => updateOption('release', parseFloat(e.target.value))}
        />
      </GroupBox>
    </ControlContainer>
  )
}
