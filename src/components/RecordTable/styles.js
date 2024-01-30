import styled from 'styled-components'
import { hoverBorder } from '@/lib/global'
import { devices } from '@/lib/devices'
import { Table, TableCell, TableHeaderContainer, TableRow } from '../Table'

const hideColumnsMobile = `
  &:nth-child(3) {
    display: none;
    @media ${devices.md} {
      display: block;
    }
  }
`

export const LoadingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  align-items: center;
  justify-items: center;
  height: 20rem;
  ${props => hoverBorder(props)}
`

export const RecordTableContainer = styled(Table)`
  table-layout: fixed;
`
export const RecordsCell = styled(TableCell)`
  ${hideColumnsMobile}
`
export const RecordsHeader = styled(TableHeaderContainer)`
  ${hideColumnsMobile}
`
export const RecordRow = styled(TableRow)`
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.table.row.hover};
    color: ${props => props.theme.table.row.hoverFont} !important;
  }
`
