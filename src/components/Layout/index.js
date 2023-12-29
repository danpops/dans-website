import { FullPageContainer } from './styles'

export { getDefaultLayout }

function getDefaultLayout (page) {
  return <FullPageContainer id='app-layout'>{page}</FullPageContainer>
}
