import styled from 'styled-components'
import { borderStyle, hoverBorder } from '@/lib/global'

export const PaginationContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  justify-content: center;
  column-gap: 1rem;
  align-items: center;
`
export const PageButton = styled.button`
  background-color: ${props => props.theme.button};
  color: ${props => props.theme.font};
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  ${props => borderStyle(props)}
  border: none;

  &:active {
    ${props => hoverBorder(props)}
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
  border-left: 0.35rem solid ${props => props.theme.font};
`
export const ChevronLeft = styled.div`
  ${chrevronStyle}
  border-top: 0.35rem solid transparent;
  border-bottom: 0.35rem solid transparent;
  border-right: 0.35rem solid ${props => props.theme.font};
`
