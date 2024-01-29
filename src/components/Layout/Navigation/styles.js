import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'
import { borderStyle, hoverBorder } from '@/lib/global'
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

export const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  justify-content: space-between;
  align-content: center;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.secondary};
  z-index: 100;
  padding: 0.5rem;
  ${props => borderStyle(props)}

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
  grid-template-columns: 1fr auto;
`
export const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: flex-end;
  column-gap: 1rem;
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
  margin-top: 0.5rem;
  grid-template-rows: repeat(5, minmax(0, 1fr));
  cursor: pointer;

  @media ${devices.md} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.5rem;
    grid-template-rows: 1fr;
  }
  @media ${devices.lg} {
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
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
  ${props => borderStyle(props)};
  padding: 0.5rem 1.5rem;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.font};

  ${({ $active }) => ($active ? hoverBorder : props => borderStyle(props))}

  &:active {
    ${props => hoverBorder(props)}
  }

  @media ${devices.md} {
    &:nth-last-child(1) {
      grid-column: 1 / span 2;
    }
  }

  @media ${devices.lg} {
    padding: 0.75rem 2rem;
    &:nth-last-child(1) {
      grid-column: 5 / span 1;
    }
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
  height: 2.5rem;
  cursor: pointer;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.font};

  ${({ $active }) => ($active ? hoverBorder : props => borderStyle(props))}

  &:active {
    ${props => hoverBorder(props)}
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

  @media ${devices.lg} {
    grid-template-columns: 1fr auto;
    justify-self: flex-start;
    column-gap: 1rem;
  }
`
export const LogoTitle = styled.div`
  display: grid;
  font-size: ${fonts.sm};
  padding: 0.5rem 1.5rem;
  text-align: center;
  justify-self: flex-start;
  cursor: pointer;
  transition: background-color 0.3s;
  user-select: none;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.font};

  ${props => borderStyle(props)}

  @media ${devices.lg} {
    padding: 0.75rem 2rem;
  }
  @media ${devices.xl} {
    font-size: ${fonts.md};
  }
  &:active {
    ${props => hoverBorder(props)}
  }
`
export const DesktopToggle = styled(LogoTitle)`
  display: none;

  @media ${devices.lg} {
    display: block;
    padding: 0.7rem 1rem;
  }
  @media ${devices.xl} {
    padding: 0.75rem 1rem;
  }
`
