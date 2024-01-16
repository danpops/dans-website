import { fonts } from '@/lib/fonts'
import styled from 'styled-components'

export const CopyrightText = styled.a`
  display: grid;
  color: ${props => props.theme.font}30;
  font-size: ${fonts.sm};
  justify-content: center;
  align-content: center;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1rem;
  &:hover {
    text-decoration: none;
  }
`
