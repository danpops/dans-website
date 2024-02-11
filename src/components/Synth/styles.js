import styled from 'styled-components'
import { borderStyle, hoverBorder } from '@/lib/global'
import { fonts } from '@/lib/fonts'
import { devices } from '@/lib/devices'

export const Button = styled.button`
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: 500;
  font-family: 'MS Sans Serif';
  font-size: ${fonts.sm};
  text-align: center;
  height: 100%;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.font};
  cursor: pointer;
  padding: 0.5rem 1rem;
  ${props => (props.$active ? hoverBorder : borderStyle)}
  &:active {
    ${hoverBorder}
  }
  &:disabled {
    color: ${props =>
      props.$active ? props.theme.windowTitle : props.theme.buttonDisabled};
    cursor: not-allowed;
  }
`
export const ControlContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, minmax(0, auto));
  padding: 0.25rem;
  ${hoverBorder}
  outline: none;
`
export const EffectContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 1fr;
  row-gap: 0.75rem;
  margin: 0.5rem;

  @media ${devices.md} {
    row-gap: 2rem;
    column-gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`
export const Label = styled.label``
export const NotesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  @media ${devices.md} {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`
export const OscillatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, auto));
  grid-template-rows: 1fr;
`
export const Slider = styled.input`
  margin-top: 1rem;
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.65rem;
    cursor: pointer;
    ${hoverBorder}
    outline: none;
  }
  &::-webkit-slider-thumb {
    border: none;
    width: 1.15rem;
    height: 2.45rem;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -1rem;
    background: ${props => props.theme.button};
    ${borderStyle}
  }
  &::-webkit-slider-runnable-track {
    background: ${props => props.theme.button};
    ${hoverBorder}
    outline: none;
  }
  &::-moz-range-track {
    border: none;
    width: 100%;
    height: 0.65rem;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    border: none;
    width: 1.15rem;
    height: 2.45rem;
    cursor: pointer;
    appearance: none;
    margin-top: -1rem;
    background: ${props => props.theme.button};
    ${borderStyle}
  }
`
export const StatusBadge = styled.div`
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 100%;
  background-color: ${props =>
    props.$active ? props.theme.success : props.theme.error};
  ${props =>
    props.$disabled &&
    `
    background-color: ${props.theme.buttonDisabled}
  `}
`
export const SynthContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, minmax(0, auto));
  row-gap: 0.5rem;
  align-items: center;
  padding: 0.25rem;

  @media ${devices.md} {
    row-gap: 1rem;
  }
`
export const ToggleButton = styled.button`
  display: grid;
  align-items: center;
  font-family: 'MS Sans Serif';
  font-size: ${fonts.sm};
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.font};
  cursor: pointer;
  padding: 0.5rem 1rem;
  ${props => (props.$active ? hoverBorder : borderStyle)}
  &:disabled {
    color: ${props =>
      props.$active ? props.theme.windowTitle : props.theme.buttonDisabled};
    cursor: not-allowed;
  }
`
export const ToggleContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
`
export const ToggleWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
`
export const ToggleLabel = styled.div`
  display: grid;
  align-items: center;
  justify-self: flex-start;
`
