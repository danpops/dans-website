import { fonts } from '@/lib/fonts'
import styled from 'styled-components'

export const GroupWrapper = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-auto-flow: row;
  border: 0.1rem solid ${props => props.theme.windowTitle};
  padding: 1rem;
  color: ${props => props.theme.font};
  ${props => `
    box-shadow: -0.07rem -0.07rem 0 0.07rem ${props.theme.border.darkBorder},
      inset -0.07rem -0.07rem 0 0.07rem ${props.theme.border.darkBorder};
  `}
`
export const GroupLabel = styled.div`
  display: flex;
  position: absolute;
  text-align: center;
  top: 0;
  left: 0.5rem;
  transform: translateY(calc(-50% - 2px));
  padding: 0.25rem 0.5rem;
  font-size: ${fonts.sm};
  background: ${props => props.theme.secondary};
`
