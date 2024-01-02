import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import styled from 'styled-components'

export const CopyrightText = styled.div`
  display: grid;
  color: ${colors.black}30;
  font-size: ${fonts.sm};
  justify-content: center;
  margin-top: 1rem;

  @media ${devices.lg} {
    margin-top: 2rem;
  }
`
