import styled from 'styled-components'
import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import { borderStyle } from '@/design/global'

export const TableContainer = styled.div`
  ${borderStyle}
`
export const Table = styled.table`
  border-collapse: separate;
  font-size: ${fonts.xs};
  width: 100%;

  @media ${devices.md} {
    font-size: ${fonts.md};
  }
`
export const TableHeaderRow = styled.tr`
  outline: 0;
`
export const TableHead = styled.th`
  text-align: center;
  padding: 0.25rem;
  ${borderStyle}
`
export const TableRow = styled.tr`
  border-collapse: collapse;
  border: 0;
  background-color: ${colors.white};
  color: ${colors.black};
  cursor: pointer;

  &:hover {
    background-color: ${colors.darkBlue};
    color: ${colors.white} !important;
  }
`
export const TableCell = styled.td`
  border: none;
`
export const TableText = styled.div`
  padding: 0.15rem;
`
