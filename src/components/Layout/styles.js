import { colors } from '@/design/colors'
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.02fr 1fr;
  width: 100%;
  height: 100vh;
  background-color: ${colors.dark};
`
