import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'
import { borderStyle, hoverBorder } from '@/lib/global'
import styled from 'styled-components'
import Image from 'next/image'

export const SpecialtyItemsContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 0.5rem;

  @media ${devices.md} {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const SpecialtyItemContainer = styled.a`
  font-size: ${fonts.sm};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 0.25rem 1rem;
  column-gap: 1rem;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.font};
  ${props => borderStyle(props)}

  &:hover {
    ${props => hoverBorder(props)}
  }
`
export const SpecialtyImageContainer = styled.div`
  display: grid;
  height: 2.5rem;
  align-items: center;
`
export const SpecialtyImage = styled(Image)`
  width: 2rem;
  height: 2rem;
  ${props => (props.inverted ? 'filter: invert(100%);' : '')}
`
