import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import styled from 'styled-components'

export const ListBoxContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 1.25rem;
  padding: 1rem;

  @media ${devices.md} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export const ListItem = styled.div`
  border: 0.25rem solid ${props => props.$bordercolor};
  width: 100%;
  text-align: center;
  background-color: ${props => props.$bgcolor};
  color: ${props => props.$color};
  font-size: ${fonts.lg};
  font-weight: 600;
`
