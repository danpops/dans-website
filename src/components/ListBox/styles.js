import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'
import { borderStyle, hoverBorder } from '@/lib/global'
import styled from 'styled-components'

export const ListBoxContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media ${devices.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const ListItem = styled.a`
  font-weight: 500;
  font-size: ${fonts.sm};
  text-align: center;
  background-color: ${props => props.theme.button};
  color: ${props => props.theme.font};
  padding: 0.5rem 2rem;
  ${props => borderStyle(props)}

  &:hover {
    ${props => hoverBorder(props)}
  }
`
