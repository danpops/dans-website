import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import { borderStyle, hoverBorder } from '@/design/global'
import styled from 'styled-components'

export const ListBoxContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  grid-gap: 1.25rem;

  @media ${devices.md} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`
export const ListItem = styled.a`
  font-weight: 500;
  font-size: ${fonts.md};
  text-align: center;
  background-color: ${props => props.$bgcolor};
  color: ${props => props.$color};
  padding: 1rem 2rem;
  ${borderStyle}
  
  &:hover {
    ${hoverBorder}
  }
`
