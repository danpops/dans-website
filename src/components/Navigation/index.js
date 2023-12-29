import { useRouter } from 'next/router'
import {
  NavigationContainer,
  PageTabsContainer,
  TabItem,
  LogoContainer,
  LogoTitle,
  NavMenuButton
} from './styles'
import { pageLinks } from '@/assets/data/links'
import { useState } from 'react'

export default function Navigation () {
  const [isVisible, setVisible] = useState(false)
  const router = useRouter()

  const clickLink = link => () => {
    setVisible(false)
    router.push(link.toLowerCase())
  }
  const goHome = () => router.push('/')

  const composePageTabs = (item, index) => {
    const isPageActive = router.pathname === `/${item.toLowerCase()}`
    return (
      <TabItem
        $active={isPageActive}
        id='tab-item'
        key={index}
        onClick={clickLink(item)}
      >
        {item}
      </TabItem>
    )
  }

  return (
    <div>
      <NavigationContainer id='navbar'>
        <NavMenuButton id='nav-menu' onClick={() => setVisible(!isVisible)}>
          !!!
        </NavMenuButton>
        <LogoContainer id='nav-logo'>
          <LogoTitle onClick={goHome}>Dan Popovic</LogoTitle>
        </LogoContainer>
      </NavigationContainer>
      <PageTabsContainer id='page-tabs' visible={isVisible}>
        {pageLinks.map(composePageTabs)}
      </PageTabsContainer>
    </div>
  )
}
