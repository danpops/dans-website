import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import styled from 'styled-components'

export const LogoContainer = styled.div`
  display: grid;
  position: absolute;
  right: 0;
  margin-right: 1rem;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;

  @media ${devices.lg} {
    margin-right: 1.5rem;
  }
`
export const LogoTitle = styled.div`
  display: grid;
  font-size: ${fonts.lg};
  font-weight: 700;
  justify-self: flex-end;
  color: ${colors.blue};
  cursor: pointer;
  user-select: none;
  border: 0.25rem solid ${colors.red};
  padding: 0.5rem;
  background-color: ${colors.yellow};

  @media ${devices.lg} {
    font-size: ${fonts.xxl};
    padding: 0.75rem;
    border: 0.5rem solid ${colors.red};
  }
`
