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
    router.push(link.toLowerCase())
  }
  const goHome = () => router.push('/')
  const toggleNav = () => setVisible(!isVisible)

  const composePageTabs = (item, index) => {
    const isPageActive = router.pathname === `/${item.toLowerCase()}`
    return (
      <TabItem
        $active={isPageActive}
        id='tab-item'
        key={index}
        onClick={onClickLink(item)}
      >
        {item}
      </TabItem>
    )
  }

  return (
    <NavigationContainer>
      <NavbarContainer id='navbar'>
        <LogoContainer id='nav-logo'>
          <LogoTitle onClick={goHome}>Dan Popovic</LogoTitle>
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
