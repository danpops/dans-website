import { hoverBorder } from '@/lib/global'
import styled from 'styled-components'

export const WaveformContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-content: center;
  background-color: black;
  ${hoverBorder}
  outline: none;
`
