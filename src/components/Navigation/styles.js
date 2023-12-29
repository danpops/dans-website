import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
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
  background-color: ${colors.blue};
  color: ${colors.yellow};
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
  background-color: ${colors.lightGreen};
  z-index: 100;
  padding: 0.5rem;

  @media ${devices.md} {
    padding: 0.5rem 4rem;
  }
  @media ${devices.lg} {
    padding: 1rem 15rem;
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
  row-gap: 0.25rem;
  column-gap: 1rem;
  margin-top: 0.5rem;
  grid-template-rows: repeat(4, minmax(0, 1fr));
  cursor: pointer;
  
  @media ${devices.md} {
    margin-top: 1rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`
export const TabItem = styled.li`
  padding: 0.5rem;
  font-size: ${fonts.sm};
  font-weight: 600;
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
  font-weight: 600;
  justify-self: flex-end;
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
  font-weight: 600;
  justify-self: flex-start;
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
