import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import styled from 'styled-components'

export const FullPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, minmax(0, auto));
  width: 100%;
  height: 100vh;
  border: 0.2rem dashed ${colors.blue};
  background-color: ${colors.background};
  box-sizing: border-box;
  padding: 1rem;
  overflow: auto;

  @media ${devices.md} {
    padding: 1rem 3rem;
  }
  @media ${devices.lg} {
    border: 0.5rem dashed ${colors.blue};
    padding: 5rem 10rem;
  }
`
export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  @media ${devices.lg} {
    margin-top: 2rem;
  }
`
