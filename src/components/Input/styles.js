import { fonts } from '@/lib/fonts'
import { hoverBorder } from '@/lib/global'
import styled from 'styled-components'

export const CustomInput = styled.input`
  ${props => hoverBorder(props)}
  outline: none;
  border-radius: 0;
  padding: 0.5rem;
  font-size: ${fonts.sm};
  background-color: ${props => props.theme.windowTitle};
  color: ${props => props.theme.font};
  font-family: 'MS Sans Serif';
`
export const CustomTextArea = styled.textarea`
  ${props => hoverBorder(props)}
  border-radius: 0;
  outline: none;
  font-family: 'MS Sans Serif';
  padding: 0.5rem;
  background-color: ${props => props.theme.windowTitle};
  color: ${props => props.theme.font};
  font-size: ${fonts.sm};
  resize: none;
`
