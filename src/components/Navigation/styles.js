import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import styled from 'styled-components'

const activeStyle = `
  background-color: ${colors.blueSecondary};
  color: ${colors.white};
`
const tabStyle = `
  background-color: ${colors.lightGrey};
  color: ${colors.black};
`

export const NavigationContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-content: space-between;
`
export const PageTabsContainer = styled.ul`
  display: grid;
  grid-template-rows: 1fr;
  list-style: none;
  padding: 0;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  cursor: pointer;

  @media ${devices.md} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
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
export const NavMenuButton = styled.button`
  display: grid;
  font-size: ${fonts.lg};
  font-weight: 700;
  justify-self: flex-start;
  color: ${colors.yellow};
  cursor: pointer;
  border: 0.25rem solid ${colors.red};
  padding: 0.5rem;
  background-color: ${colors.blueSecondary};

  &:hover {
    background-color: ${colors.red};
  }

  @media ${devices.lg} {
    font-size: ${fonts.xxl};
    padding: 0.75rem;
    border: 0.5rem solid ${colors.red};
  }
`
export const LogoContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
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
