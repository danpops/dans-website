import { useRouter } from 'next/router'
import {
  NavigationContainer,
  PageTabsContainer,
  TabItem,
  LogoContainer,
  LogoTitle,
  NavMenuButton,
  NavbarContainer
} from './styles'
import { pageLinks } from '@/assets/data/links'
import { useState } from 'react'

export default function Navigation () {
  const [isVisible, setVisible] = useState(false)
  const router = useRouter()

  const onClickLink = link => () => {
    setVisible(false)
    router.push(link)
  }
  const goHome = () => router.push('/')
  const toggleNav = () => setVisible(!isVisible)

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
        </LogoContainer>
        <NavMenuButton id='nav-menu' onClick={toggleNav} $active={isVisible}>
          !!!
        </NavMenuButton>
      </NavbarContainer>
      <PageTabsContainer id='page-tabs' $visible={isVisible}>
        {pageLinks.map(composePageTabs)}
      </PageTabsContainer>
    </NavigationContainer>
  )
}
