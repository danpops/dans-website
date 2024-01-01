import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import { borderStyle, hoverBorder } from '@/design/global'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const activeStyle = `
  background-color: ${colors.lightGrey};
  color: ${colors.black};
  ${hoverBorder}
`
const tabStyle = `
  background-color: ${colors.lightGrey};
  color: ${colors.black};
`

export const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  justify-content: space-between;
  align-content: center;
  position: sticky;
  top: 0;
  background-color: ${colors.grey};
  z-index: 100;
  padding: 0.5rem;
  ${borderStyle}

  @media ${devices.md} {
    padding: 0.5rem 4rem;
  }
  @media ${devices.lg} {
    padding: 0.5rem 15rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    height: 3rem;
  }
  @media ${devices.xl} {
    padding: 0.5rem 30rem;
    height: 4rem;
  }
`
export const NavbarContainer = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: 1fr 1fr;
`
export const PageTabsContainer = styled.ul`
  display: ${props => (props.$visible ? 'grid' : 'none')};
  animation: ${props => (props.$visible ? fadeIn : fadeOut)} 0.5s ease;
  grid-template-rows: 1fr;
  list-style: none;
  padding: 0;
  margin: 0;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
  column-gap: 1rem;
  margin-top: 0.5rem;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  cursor: pointer;

  @media ${devices.md} {
    margin-top: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
  @media ${devices.lg} {
    display: grid;
    animation: none;
    margin: 0;
    height: 100%;
    align-items: center;
  }
`
export const TabItem = styled.li`
  font-weight: 500;
  font-size: ${fonts.sm};
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
  ${borderStyle};
  padding: 0.5rem 1.5rem;

  ${({ $active }) => ($active ? activeStyle : tabStyle)}

  &:hover {
    background-color: ${colors.yellow};
    color: ${colors.blue};
    ${hoverBorder}
  }

  @media ${devices.lg} {
    padding: 0.75rem 2rem;
  }

  @media ${devices.xl} {
    font-size: ${fonts.md};
  }
`
export const NavMenuButton = styled.button`
  display: grid;
  font-weight: 600;
  font-size: ${fonts.md};
  text-align: center;
  justify-self: flex-end;
  align-items: center;
  padding: 0.5rem;
  width: 2.5rem;
  cursor: pointer;
  ${tabStyle};
  ${borderStyle}

  &:hover {
    ${hoverBorder}
    background-color: ${colors.yellow};
    color: ${colors.blue};
  }

  @media ${devices.lg} {
    display: none;
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
  font-size: ${fonts.sm};
  font-weight: 600;
  padding: 0.5rem 1.5rem 0.65rem;
  text-align: center;
  justify-self: flex-start;
  cursor: pointer;
  transition: background-color 0.3s;
  user-select: none;
  ${tabStyle}
  ${borderStyle}

  @media ${devices.lg} {
    padding: 0.75rem 2rem 1rem;
    font-size: ${fonts.lg};
  }
  &:hover {
    ${hoverBorder}
    background-color: ${colors.yellow};
    color: ${colors.blue};
  }
`
