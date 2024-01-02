import styled from 'styled-components'
import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'

export const WindowHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  margin: 0.35rem;
  background-color: ${colors.darkBlue};
`
export const WindowBody = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  padding: 1rem;

  @media ${devices.md} {
    padding: 2rem 3rem;
  }
  @media ${devices.lg} {
    padding: 3rem 8rem 2rem;
  }
`
export const WindowTitle = styled.div`
  color: ${colors.white};
  font-size: ${fonts.sm};
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 700;

  @media ${devices.lg} {
    font-size: ${fonts.md};
  }
`
