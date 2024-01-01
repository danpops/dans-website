import { colors } from '@/design/colors'
import { fonts } from '@/design/fonts'
import { borderStyle, hoverBorder } from '@/design/global'
import styled from 'styled-components'

export const HomeButtonContainer = styled.button`
  display: grid;
  align-items: center;
  padding-bottom: 0.25rem;
  background-color: ${colors.grey};
  font-size: ${fonts.lg};
  font-weight: bold;
  margin: 0.25rem;
  cursor: pointer;
  ${borderStyle}

  &:hover {
    ${hoverBorder}
    outline: none;
  }
`
