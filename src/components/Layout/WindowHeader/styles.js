import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'
import { borderStyle, hoverBorder } from '@/lib/global'
import styled from 'styled-components'

export const CloseButtonContainer = styled.button`
  display: grid;
  align-items: center;
  padding-bottom: 0.25rem;
  background-color: ${props => props.theme.secondary};
  width: 1.5rem;
  justify-content: center;
  color: ${props => props.theme.font};
  font-size: ${fonts.md};
  font-weight: bold;
  margin: 0.25rem;
  cursor: pointer;
  ${props => borderStyle(props)}

  &:active {
    ${props => hoverBorder(props)}
    outline: none;
  }

  @media ${devices.lg} {
    width: 2rem;
  }
`
export const WindowHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  margin: 0.35rem;
  background-color: ${props => props.theme.windowHeader};
`
export const WindowTitle = styled.div`
  color: ${props => props.theme.windowTitle};
  font-size: ${fonts.sm};
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 700;

  @media ${devices.lg} {
    font-size: ${fonts.md};
  }
`
