import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
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
  border: 0.2rem dashed ${colors.blue};
  box-sizing: border-box;
  overflow: scroll;
  height: 100%;
  padding: 1rem;

  @media ${devices.md} {
    padding: 2rem 4rem;
  }
  @media ${devices.lg} {
    padding: 3rem 15rem;
  }
`
export const SectionContainer = styled.div`
  display: grid;
`
