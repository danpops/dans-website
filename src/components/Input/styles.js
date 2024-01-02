import { colors } from '@/design/colors'
import { hoverBorder } from '@/design/global'
import styled from 'styled-components'

export const CustomInput = styled.input`
  ${hoverBorder}
  outline: none;
  padding: 0.45rem;
  background-color: ${colors.white};
  font-family: 'MS Sans Serif';
`
export const CustomTextArea = styled.textarea`
  ${hoverBorder}
  outline: none;
  font-family: 'MS Sans Serif';
  padding: 0.45rem;
  resize: none;
`
