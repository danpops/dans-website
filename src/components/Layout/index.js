import { FullPageContainer } from './styles'
import Navigation from '../Navigation'

export { getDefaultLayout }

function getDefaultLayout (page) {
  return (
    <FullPageContainer id='app-layout'>
      <Navigation />
      {page}
    </FullPageContainer>
  )
}
