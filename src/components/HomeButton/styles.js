import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import { borderStyle, hoverBorder } from '@/design/global'
import styled from 'styled-components'

export const HomeButtonContainer = styled.button`
  display: grid;
  align-items: center;
  padding-bottom: 0.25rem;
  background-color: ${colors.grey};
  width: 1.5rem;
  justify-content: center;
  color: ${colors.black};
  font-size: ${fonts.md};
  font-weight: bold;
  margin: 0.25rem;
  cursor: pointer;
  ${borderStyle}

  &:hover {
    ${hoverBorder}
    outline: none;
  }

  @media ${devices.lg} {
    width: 2rem;
  }
`
