import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'
import { borderStyle, hoverBorder } from '@/lib/global'
import styled from 'styled-components'

export const HomeButtonContainer = styled.button`
  display: grid;
  align-items: center;
  padding-bottom: 0.25rem;
  background-color: ${props => props.theme.button};
  width: 1.5rem;
  justify-content: center;
  color: ${props => props.theme.font};
  font-size: ${fonts.md};
  font-weight: bold;
  margin: 0.25rem;
  cursor: pointer;
  ${props => borderStyle(props)}

  &:hover {
    ${props => hoverBorder(props)}
    outline: none;
  }

  @media ${devices.lg} {
    width: 2rem;
  }
`
