import { hoverBorder } from '@/lib/global'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  ${props => hoverBorder(props)}
  outline: none;
  width: 100%;
  background-color: ${props => props.theme.secondary};
`
export const ProgressBar = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, auto));
  column-gap: 0.25rem;
  outline: none;
  justify-content: flex-start;
  width: 100%;
  height: 1.5rem;
  padding: 0.5rem;
`
export const Tile = styled.div`
  max-width: 12px;
  box-sizing: border-box;
  display: inline-flex;
  background-color: ${props => props.theme.windowHeader};
  padding: 0.4rem;
`
