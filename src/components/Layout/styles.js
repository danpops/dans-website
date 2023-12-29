import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { borderStyle } from '@/design/global'
import styled from 'styled-components'

export const FullPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;
  background-color: ${colors.lightGrey};
  color: ${colors.black};
`
export const ContentContainer = styled.div`
  overflow: scroll;
  height: 100%;
  background-color: ${colors.darkGreen};
  padding: 1rem;

  @media ${devices.md} {
    padding: 1rem 4rem;
  }
  @media ${devices.lg} {
    padding: 4rem 15rem 1rem;
  }
`
export const SectionContainer = styled.div`
  display: grid;
  background-color: ${colors.grey};
  padding: 1rem;
  ${borderStyle}

  @media ${devices.md} {
    padding: 2rem;
  }
`
