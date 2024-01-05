import styled from 'styled-components'
import { borderStyle, hoverBorder } from '@/design/global'
import { colors } from '@/design/colors'

export const PaginationContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  justify-content: center;
  column-gap: 1rem;
  align-items: center;
`
export const PageButton = styled.button`
  background-color: ${colors.grey};
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  ${borderStyle}
  border: none;

  &:active {
    ${hoverBorder}
  }
`
const chrevronStyle = `
  position: relative;
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
`
export const ChevronRight = styled.div`
  ${chrevronStyle}
  border-top: 0.35rem solid transparent;
  border-bottom: 0.35rem solid transparent;
  border-left: 0.35rem solid ${colors.black};
`
export const ChevronLeft = styled.div`
  ${chrevronStyle}
  border-top: 0.35rem solid transparent;
  border-bottom: 0.35rem solid transparent;
  border-right: 0.35rem solid ${colors.black};
`
