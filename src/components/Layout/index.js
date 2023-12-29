import { FullPageContainer } from './styles'
import Logo from '../Logo'
import PageTabs from '../PageTabs'

export { getDefaultLayout }

function getDefaultLayout (page) {
  return (
    <FullPageContainer id='app-layout'>
      <Logo />
      <PageTabs />
      {page}
    </FullPageContainer>
  )
}
