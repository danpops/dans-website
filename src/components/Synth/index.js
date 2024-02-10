import { Analyzer } from '@/components/Synth/Analyzer'
import { PiPlayPauseFill } from 'react-icons/pi'
import {
  ControlContainer,
  EffectContainer,
  Label,
  OscillatorContainer,
  Slider,
  StatusBadge,
  SynthContainer,
  ToggleContainer,
  ToggleLabel,
  ToggleButton,
  ToggleWrapper
} from './styles'
import { OSCILLATORS } from '@/hooks/useSynthNote'

export default function Synth (props) {
  const {
    Waveform,
    changeAM,
    changeFM,
    changeFrequency,
    changeOscillator,
    changeSynthVolume,
    frequency,
    freqAM,
    freqFM,
    isPlaying,
    lfoStatus,
    oscillatorType,
    toggleLFO,
    toggleSynth,
    volume
  } = props

  return (
    <SynthContainer>
      <Analyzer waveform={Waveform} />
      <ControlContainer>
        <ToggleContainer>
          <SynthToggle
            label={<PiPlayPauseFill size={25} />}
            active={isPlaying}
            onClick={toggleSynth}
          />
          <SynthToggle label='LFO' active={lfoStatus} onClick={toggleLFO} />
        </ToggleContainer>
        <OscillatorContainer>
          {OSCILLATORS.map(item => (
            <SynthToggle
              key={item.label}
              label={item.icon}
              active={oscillatorType === item.value}
              onClick={() => changeOscillator(item.value)}
            />
          ))}
        </OscillatorContainer>
      </ControlContainer>
      <EffectContainer>
        <SynthSlider
          label='Volume'
          min='-30'
          max='5'
          step='0.1'
          value={volume}
          onChange={e => changeSynthVolume(parseFloat(e.target.value))}
        />
        <SynthSlider
          label='Frequency'
          min='100'
          max='500'
          step='0.1'
          value={frequency}
          onChange={e => changeFrequency(parseFloat(e.target.value))}
        />
        {lfoStatus && (
          <>
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
          </>
        )}
      </EffectContainer>
    </SynthContainer>
  )
}
function SynthSlider ({ value, label, min, max, step, onChange }) {
  return (
    <Label>
      {label} ({value})
      <Slider
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </Label>
  )
}
function SynthToggle ({ label, active, onClick }) {
  return (
    <ToggleButton $active={active} onClick={onClick}>
      <ToggleWrapper>
        <StatusBadge $active={active} />
        <ToggleLabel>{label}</ToggleLabel>
      </ToggleWrapper>
    </ToggleButton>
  )
}
