import { colors } from '@/design/colors'
import styled from 'styled-components'

export const FullPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;
  background-color: ${colors.background};
`
export const ContentContainer = styled.div`
  border: 0.2rem dashed ${colors.blue};
  box-sizing: border-box;
  overflow: scroll;
  height: 100%;
  padding: 1rem;
`
export const SectionContainer = styled.div`
  display: grid;
`
