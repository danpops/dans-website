import { useRouter } from 'next/router'
import {
  NavigationContainer,
  PageTabsContainer,
  TabItem,
  LogoContainer,
  LogoTitle,
  NavMenuButton,
  NavbarContainer,
  ToggleContainer,
  DesktopToggle
} from './styles'
import { useEffect, useState } from 'react'
import { useTheme } from '../ThemeProvider'

const PAGE_LINKS = ['About', 'Specialties', 'Experience', 'Records', 'Contact']
export default function Navigation () {
  const [menuActive, setMenuActive] = useState(false)
  const router = useRouter()
  const { themeMode, toggleTheme } = useTheme()
  const themeLabel = themeMode === 'dark' ? '🌞' : '🌜'

  const goHome = () => router.push('/')
  const onClickLink = link => () => router.push(link)
  const toggleNav = () => setMenuActive(!menuActive)

  useEffect(() => {
    setMenuActive(false)
  }, [router.pathname])

  return (
    <NavigationContainer>
      <NavbarContainer id='navbar'>
        <LogoContainer>
          <LogoTitle id='nav-logo' onClick={goHome}>
            Dan Popovic
          </LogoTitle>
          <DesktopToggle id='theme-toggle' onClick={toggleTheme}>
            {themeLabel}
          </DesktopToggle>
        </LogoContainer>
        <ToggleContainer>
          <NavMenuButton id='theme-toggle' onClick={toggleTheme}>
            {themeLabel}
          </NavMenuButton>
          <NavMenuButton id='nav-menu' onClick={toggleNav} $active={menuActive}>
            !!!
          </NavMenuButton>
        </ToggleContainer>
      </NavbarContainer>
      <PageTabsContainer id='page-tabs' $visible={menuActive}>
        {PAGE_LINKS.map((link, index) => (
          <NavigationLink
            key={index}
            link={link}
            router={router}
            onClickLink={onClickLink}
          />
        ))}
      </PageTabsContainer>
    </NavigationContainer>
  )
}
function NavigationLink ({ link, onClickLink, router }) {
  const name = link.toLowerCase()
  const path = `/${name}`
  const isPageActive = router.pathname === path
  return (
    <TabItem
      $active={isPageActive}
      id={`${name}-nav-tab`}
      onClick={onClickLink(path)}
    >
      {link}
    </TabItem>
  )
}
