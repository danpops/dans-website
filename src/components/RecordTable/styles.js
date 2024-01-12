import styled from 'styled-components'
import { borderStyle, hoverBorder, tableBorder } from '@/lib/global'
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
  ${props => hoverBorder(props)}
`
export const Table = styled.table`
  font-size: ${fonts.sm};
  width: 100%;
  ${props => tableBorder(props)}
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
  background-color: ${props => props.theme.table.header};
  ${props => borderStyle(props)}
`
export const TableHeaderRow = styled.tr`
  outline: 0;
`
export const TableRow = styled.tr`
  border-collapse: collapse;
  border: 0;
  background-color: ${props => props.theme.table.row.bg};
  color: ${props => props.theme.table.row.font};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.table.row.hover};
    color: ${props => props.theme.table.row.hoverFont} !important;
  }
`
export const TableText = styled.div`
  padding: 0.15rem;
`
