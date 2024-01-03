import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import { colors } from '@/design/colors'
import { borderStyle, hoverBorder } from '@/design/global'
import styled from 'styled-components'

const commonTableStyles = `
  font-size: ${fonts.sm};
  width: 100%;
  outline: 0;

  @media ${devices.md} {
    font-size: ${fonts.md};
  }
`
export const AlignedTable = styled.table`
  ${commonTableStyles}
  table-layout: fixed;
  border-spacing: 0;
`
export const BodyTableContainer = styled.div`
  ${hoverBorder}
  outline: 0;
  max-height: 15rem;
  overflow-y: auto;
  position: relative;

  @media ${devices.lg} {
    max-height: 30rem;
  }
`
export const TableContainer = styled.div`
  background-color: ${colors.white};
`
export const StickyTableHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.grey};
  z-index: 1;
`
export const TableCell = styled.td`
  border: none;
  padding: 0.25rem 0.5rem;
`
export const Table = styled.table`
  ${commonTableStyles}
`
export const TableBody = styled.tbody`
  border-collapse: collapse;
  outline: none;
`
export const TableHeader = styled.th`
  text-align: center;
  padding: 0.25rem;
  background-color: ${colors.grey};
  ${borderStyle}
`
export const TableRow = styled.tr`
  border-collapse: collapse;
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
