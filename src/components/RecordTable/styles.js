import styled from 'styled-components'
import { borderStyle, hoverBorder, tableBorder } from '@/lib/global'
import { colors } from '@/lib/colors'
import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'

export const LoadingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  align-items: center;
  justify-items: center;
  height: 10rem;
  ${hoverBorder}
`
export const Table = styled.table`
  font-size: ${fonts.sm};
  width: 100%;
  ${tableBorder}
  outline: 0;

  @media ${devices.md} {
    font-size: ${fonts.md};
  }
`
export const TableCell = styled.td`
  border: none;
`
export const TableBody = styled.tbody`
  border-collapse: collapse;
`
export const TableHead = styled.thead``
export const TableHeader = styled.th`
  text-align: center;
  padding: 0.25rem;
  background-color: ${colors.grey};
  ${borderStyle}
`
export const TableHeaderRow = styled.tr`
  outline: 0;
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
export const TableText = styled.div`
  padding: 0.15rem;
`
