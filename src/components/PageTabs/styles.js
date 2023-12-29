import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import styled from 'styled-components'

const activeStyle = `
  background-color: ${colors.blue};
  color: ${colors.white};
`
const tabStyle = `
  background-color: ${colors.grey};
  color: ${colors.black};
`

export const PageTabsContainer = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  list-style: none;
  padding: 0;
  margin-top: 4rem;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  cursor: pointer;

  @media ${devices.md} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    margin-top: 6rem;
  }
`
export const TabItem = styled.li`
  padding: 0.5rem;
  font-size: ${fonts.sm};
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  border-right: 0.15rem solid ${colors.mediumGrey};
  border-bottom: 0.15rem solid ${colors.mediumGrey};
  transition: background-color 0.3s;

  ${({ $active }) => ($active ? activeStyle : tabStyle)}

  &:hover {
    ${activeStyle}
  }

  @media ${devices.md} {
    padding: 1rem;
    font-size: ${fonts.md};
  }
  @media ${devices.lg} {
    font-size: ${fonts.xl};
  }
`
