import { colors } from '@/design/colors'
import styled from 'styled-components'

export const FullPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 0.2rem dashed ${colors.blueSecondary};
  background-color: ${colors.lightGreen};
  box-sizing: border-box;
  padding: 1rem;
  overflow: auto;
`
export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`
