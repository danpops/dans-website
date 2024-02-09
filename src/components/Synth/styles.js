import styled from 'styled-components'
import { borderStyle, hoverBorder } from '@/lib/global'
import { fonts } from '@/lib/fonts'
import { devices } from '@/lib/devices'

export const Button = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: 500;
  font-family: 'MS Sans Serif';
  font-size: ${fonts.sm};
  text-align: center;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.font};
  cursor: pointer;
  padding: 0.25rem 1rem;
  ${props => (props.$active ? hoverBorder(props) : borderStyle(props))}
  outline: none;

  &:nth-child(1) {
    grid-column: 1 / span 4;
  }
`
export const ControlContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: auto auto;
  row-gap: 0.5rem;
`
export const EffectContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, auto);
  grid-template-columns: 1fr;
  row-gap: 2rem;

  @media ${devices.md} {
    column-gap: 2rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`
export const Label = styled.label``
export const Slider = styled.input`
  margin-top: 1.5rem;
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
export const SynthContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(0, auto));
  row-gap: 1rem;
  align-items: center;

  @media ${devices.md} {
    row-gap: 2.5rem;
  }
`
