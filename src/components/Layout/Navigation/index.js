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

const PAGE_LINKS = ['About', 'Specialties', 'Experience', 'Contact', 'Records']
export default function Navigation () {
  const [isVisible, setVisible] = useState(false)
  const router = useRouter()
  const { themeMode, toggleTheme } = useTheme()
  const themeLabel = themeMode === 'dark' ? '🌞' : '🌜'

  const goHome = () => router.push('/')
  const onClickLink = link => () => router.push(link)
  const toggleNav = () => setVisible(!isVisible)

  useEffect(() => {
    setVisible(false)
  }, [router.pathname])

  const composePageTabs = (item, index) => {
    const pageName = item.toLowerCase()
    const pagePath = `/${pageName}`
    const isPageActive = router.pathname === pagePath
    return (
      <TabItem
        $active={isPageActive}
        id={`${pageName}-nav-tab`}
        key={index}
        onClick={onClickLink(pagePath)}
      >
        {item}
      </TabItem>
    )
  }

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
          <NavMenuButton id='nav-menu' onClick={toggleNav} $active={isVisible}>
            !!!
          </NavMenuButton>
        </ToggleContainer>
      </NavbarContainer>
      <PageTabsContainer id='page-tabs' $visible={isVisible}>
        {PAGE_LINKS.map(composePageTabs)}
      </PageTabsContainer>
    </NavigationContainer>
  )
}
