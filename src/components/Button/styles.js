import styled from 'styled-components'
import { borderStyle, hoverBorder } from '@/lib/global'
import { fonts } from '@/lib/fonts'

export const Button = styled.button`
  display: grid;
  align-items: center;
  justify-items: center;
  font-weight: 500;
  font-family: 'MS Sans Serif';
  font-size: ${fonts.sm};
  text-align: center;
  height: 100%;
  background-color: ${props =>
    props.$highlighted ? props.theme.marquee : props.theme.secondary};
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
export const CustomToggle = styled.button`
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
export const ToggleContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
`
export const ToggleLabel = styled.div`
  display: grid;
  align-items: center;
  justify-self: flex-start;
`
export const ToggleWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  column-gap: 1rem;
  align-items: center;
  justify-items: center;
`
