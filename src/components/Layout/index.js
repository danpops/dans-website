import { FullPageContainer } from './styles'
import Navigation from '../Navigation'
import FooterBanner from '../FooterBanner'

export { getDefaultLayout }

function getDefaultLayout (page) {
  return (
    <FullPageContainer id='app-layout'>
      <Navigation />
      {page}
      <FooterBanner />
    </FullPageContainer>
  )
}
