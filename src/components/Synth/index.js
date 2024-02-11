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
import GroupBox from '@/components/GroupBox'

export default function Synth (props) {
  const {
    Waveform,
    activeNote,
    changeAM,
    changeFM,
    changeOscillator,
    changeSynthVolume,
    changeSynthNote,
    changeTempo,
    freqAM,
    freqFM,
    isPlaying,
    lfoStatus,
    noteLength,
    notesVisible,
    oscillatorType,
    randomizeLoop,
    tempo,
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
          randomizeLoop={randomizeLoop}
        />
      )}
      <SynthEffects
        changeAM={changeAM}
        changeFM={changeFM}
        changeTempo={changeTempo}
        changeSynthVolume={changeSynthVolume}
        tempo={tempo}
        freqAM={freqAM}
        freqFM={freqFM}
        lfoStatus={lfoStatus}
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
    randomizeLoop,
    isPlaying,
    noteLength,
    toggleNoteLength
  } = props
  return (
    <ControlContainer>
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
      <ToggleContainer>
        {NOTE_LENGTHS.map(item => (
          <SynthToggle
            key={item}
            label={item}
            active={noteLength === item}
            onClick={() => toggleNoteLength(item)}
          />
        ))}
        <Button onClick={randomizeLoop}>Random Loop</Button>
      </ToggleContainer>
    </ControlContainer>
  )
}
function SynthEffects (props) {
  const {
    changeAM,
    changeFM,
    changeTempo,
    changeSynthVolume,
    freqAM,
    freqFM,
    lfoStatus,
    tempo,
    volume
  } = props
  return (
    <EffectContainer>
      <GroupBox groupLabel='Synth'>
        <SynthSlider
          label='Volume'
          min='-30'
          max='5'
          step='0.1'
          value={volume}
          onChange={e => changeSynthVolume(parseFloat(e.target.value))}
        />
        <SynthSlider
          label='Tempo'
          min='30'
          max='225'
          step='1'
          value={tempo}
          onChange={e => changeTempo(parseFloat(e.target.value))}
        />
      </GroupBox>
      {lfoStatus && (
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
function SynthSlider ({ value, label, min, max, step, onChange }) {
  return (
    <div>
      <Label>
        {label} ({value})
      </Label>
      <Slider
        type='range'
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
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
