import styled from 'styled-components'
import { borderStyle, tableBorder } from '@/lib/global'
import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'

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
export const TableHeaderContainer = styled.th`
  background-color: ${props => props.theme.table.header};
  ${props => borderStyle(props)}
`
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
  align-items: center;
  justify-items: flex-start;
  padding: 0.5rem 1rem;
`
export const TableHeaderRow = styled.tr`
  outline: 0;
`
export const TableRow = styled.tr`
  border-collapse: collapse;
  border: 0;
  background-color: ${props => props.theme.table.row.bg};
  color: ${props => props.theme.table.row.font};
`
export const TableText = styled.div`
  padding: 0.15rem;
`
export const SortChevron = styled.div`
  position: relative;
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 0.45rem solid transparent;
  border-right: 0.45rem solid transparent;
  ${props => {
    const location = props.order === 'asc' ? 'bottom' : 'top'
    return `border-${location}: 0.45rem solid ${props.theme.font}`
  }}
`
