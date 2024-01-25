import { fonts } from '@/lib/fonts'
import { borderStyle, hoverBorder } from '@/lib/global'
import styled from 'styled-components'

export const CustomForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, minmax(0, auto));
  row-gap: 0.5rem;
  font-size: ${fonts.sm};
`
export const SubmitButton = styled.button`
  font-weight: 500;
  font-size: ${fonts.sm};
  font-family: 'MS Sans Serif';
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  ${props => borderStyle(props)};
  padding: 0.5rem 0;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.font};

  &:hover {
    ${props => hoverBorder(props)}
  }

  &:disabled {
    color: ${props => props.theme.buttonDisabled};
    cursor: not-allowed;
    &:hover {
      ${props => borderStyle(props)}
      outline: none;
    }
  }
`
export const TextInput = styled.input`
  ${props => hoverBorder(props)}
  outline: none;
  border-radius: 0;
  padding: 0.5rem;
  font-size: ${fonts.sm};
  background-color: ${props => props.theme.windowTitle};
  color: ${props => props.theme.font};
  font-family: 'MS Sans Serif';
`
export const TextArea = styled.textarea`
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
export const ErrorLabel = styled.label`
  color: ${props => props.theme.error};
`
