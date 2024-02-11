import { Analyzer } from '@/components/Synth/Analyzer'
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
  ToggleWrapper,
  NotesContainer,
  Button
} from './styles'
import { NOTE_LENGTHS, OSCILLATORS, SYNTH_NOTES } from '@/hooks/useSynthNote'

export default function Synth (props) {
  const {
    Waveform,
    activeNote,
    changeAM,
    changeFM,
    changeFrequency,
    changeOscillator,
    changeSynthVolume,
    changeSynthNote,
    frequency,
    freqAM,
    freqFM,
    isPlaying,
    lfoStatus,
    noteLength,
    notesVisible,
    oscillatorType,
    toggleLFO,
    toggleNoteLength,
    toggleNotes,
    toggleSynth,
    volume
  } = props

  return (
    <SynthContainer>
      <Analyzer waveform={Waveform} />
      <SynthControls
        changeOscillator={changeOscillator}
        isPlaying={isPlaying}
        lfoStatus={lfoStatus}
        notesVisible={notesVisible}
        oscillatorType={oscillatorType}
        toggleLFO={toggleLFO}
        toggleNotes={toggleNotes}
        toggleSynth={toggleSynth}
      />
      {notesVisible && (
        <SynthNotes
          activeNote={activeNote}
          changeSynthNote={changeSynthNote}
          isPlaying={isPlaying}
          noteLength={noteLength}
          toggleNoteLength={toggleNoteLength}
        />
      )}
      <SynthEffects
        changeAM={changeAM}
        changeFM={changeFM}
        changeFrequency={changeFrequency}
        changeSynthVolume={changeSynthVolume}
        frequency={frequency}
        freqAM={freqAM}
        freqFM={freqFM}
        lfoStatus={lfoStatus}
        notesVisible={notesVisible}
        volume={volume}
      />
    </SynthContainer>
  )
}
function SynthControls (props) {
  const {
    changeOscillator,
    isPlaying,
    lfoStatus,
    notesVisible,
    oscillatorType,
    toggleLFO,
    toggleNotes,
    toggleSynth
  } = props
  return (
    <ControlContainer>
      <ToggleContainer>
        <SynthToggle label='Play' active={isPlaying} onClick={toggleSynth} />
        <SynthToggle
          label='Notes'
          active={notesVisible}
          onClick={toggleNotes}
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
  )
}
function SynthNotes (props) {
  const {
    activeNote,
    changeSynthNote,
    isPlaying,
    noteLength,
    toggleNoteLength
  } = props
  return (
    <ControlContainer>
      {!isPlaying && (
        <ToggleContainer>
          {NOTE_LENGTHS.map(item => (
            <SynthToggle
              key={item}
              label={item}
              active={noteLength === item}
              onClick={() => toggleNoteLength(item)}
            />
          ))}
        </ToggleContainer>
      )}
      <NotesContainer>
        {Object.keys(SYNTH_NOTES).map(item => (
          <Button
            key={item}
            $active={activeNote === item && isPlaying}
            onClick={() => changeSynthNote(item)}
          >
            {item}
          </Button>
        ))}
      </NotesContainer>
    </ControlContainer>
  )
}
function SynthEffects (props) {
  const {
    changeAM,
    changeFM,
    changeFrequency,
    changeSynthVolume,
    frequency,
    freqAM,
    freqFM,
    lfoStatus,
    notesVisible,
    volume
  } = props
  return (
    <EffectContainer>
      <SynthSlider
        label='Volume'
        min='-30'
        max='5'
        step='0.1'
        value={volume}
        onChange={e => changeSynthVolume(parseFloat(e.target.value))}
      />
      {!notesVisible && (
        <SynthSlider
          label='Frequency'
          min='100'
          max='500'
          step='0.1'
          value={frequency}
          onChange={e => changeFrequency(parseFloat(e.target.value))}
        />
      )}
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
function SynthToggle ({ label, active, disabled = false, onClick }) {
  return (
    <ToggleButton $active={active} disabled={disabled} onClick={onClick}>
      <ToggleWrapper>
        <StatusBadge $active={active} $disabled={disabled} />
        <ToggleLabel>{label}</ToggleLabel>
      </ToggleWrapper>
    </ToggleButton>
  )
}
