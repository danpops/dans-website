import styled from 'styled-components'
import { WindowBody } from '../PageWindow/styles'
import { borderStyle } from '@/design/global'
import { colors } from '@/design/colors'

export const TableContainer = styled.div`
  overflow: auto;
`
export const TableWindowBody = styled(WindowBody)`
  grid-template-rows: repeat(4, minmax(0, auto));
  align-content: center;
`
export const TableWindowWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  ${borderStyle}
  outline: 0;
  position: relative;
  align-items: flex-start;
  background-color: ${colors.grey};
`
