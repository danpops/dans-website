import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import styled from 'styled-components'

export const PageTabsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  list-style: none;
  padding: 0;
  background-color: ${colors.lightGrey};
  border-bottom: 0.15rem solid ${colors.mediumGrey};
  margin-top: 4rem;

  @media ${devices.lg} {
    margin-top: 6rem;
  }
`
export const TabItem = styled.li`
  padding: 1rem;
  font-size: ${fonts.sm};
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  border-right: 0.15rem solid ${colors.mediumGrey};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${colors.blue};
  }

  @media ${devices.md} {
    font-size: ${fonts.md};
  }
  @media ${devices.lg} {
    font-size: ${fonts.xl};
  }
`
