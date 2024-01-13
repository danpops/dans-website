import { fonts } from '@/lib/fonts'
import styled from 'styled-components'

export const CopyrightText = styled.div`
  display: grid;
  color: ${props => props.theme.font}30;
  font-size: ${fonts.sm};
  justify-content: center;
  align-content: center;
`
