import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'
import { borderStyle, hoverBorder } from '@/lib/global'
import styled from 'styled-components'

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  row-gap: 1rem;
  justify-items: flex-start;
  align-content: center;
  @media ${devices.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-flow: row;
    column-gap: 1rem;
  }
`
export const ProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  padding: 1rem;
  row-gap: 1rem;
  align-content: flex-start;
  max-width: 50rem;
  ${borderStyle}
`
export const ProjectTitle = styled.div`
  font-size: ${fonts.md};
  font-weight: 600;
`
export const ProjectInfo = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.windowTitle};
  ${hoverBorder}
  outline: none;
`
export const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, auto));
  grid-template-rows: 1fr;
  column-gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.25rem;
`
export const LinkItem = styled.a`
  cursor: pointer;
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 0.5rem 2rem;
  font-size: ${fonts.sm};
  color: ${props => props.theme.font} !important;
  background-color: ${props => props.theme.secondary};
  ${props => borderStyle(props)}
  &:active {
    ${props => hoverBorder(props)}
  }
`
