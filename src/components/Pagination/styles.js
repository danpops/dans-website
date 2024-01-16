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
export const PageButtonContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  column-gap: 0.5rem;
`
export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  cursor: pointer;
  ${props => borderStyle(props)}
  border: none;
  font-family: 'MS Sans Serif' !important;

  ${({ $active, theme }) => `
    background-color: ${$active ? theme.heroTitle : theme.button};
    color: ${$active ? theme.windowTitle : theme.font};
    ${$active && hoverBorder({ theme })}
    ${$active && 'outline: none;'}
  `}

  &:active {
    ${props => hoverBorder(props)}
  }
  &:disabled {
    background-color: ${props => props.theme.buttonDisabled};
    cursor: not-allowed;
  }
`
const chrevronStyle = `
  position: relative;
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 0.35rem solid transparent;
  border-bottom: 0.35rem solid transparent;
`
export const ChevronRight = styled.div`
  ${chrevronStyle}
  border-left: 0.35rem solid ${props => props.theme.font};
`
export const ChevronLeft = styled.div`
  ${chrevronStyle}
  border-right: 0.35rem solid ${props => props.theme.font};
`
