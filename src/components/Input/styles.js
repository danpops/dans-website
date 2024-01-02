import { colors } from '@/design/colors'
import { fonts } from '@/design/fonts'
import { hoverBorder } from '@/design/global'
import styled from 'styled-components'

export const CustomInput = styled.input`
  ${hoverBorder}
  outline: none;
  border-radius: 0;
  padding: 0.5rem;
  font-size: ${fonts.sm};
  background-color: ${colors.white};
  font-family: 'MS Sans Serif';
`
export const CustomTextArea = styled.textarea`
  ${hoverBorder}
  border-radius: 0;
  outline: none;
  font-family: 'MS Sans Serif';
  padding: 0.5rem;
  font-size: ${fonts.sm};
  resize: none;
`
