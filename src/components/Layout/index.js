import { LayoutContainer } from './styles'

export { getDefaultLayout }

function getDefaultLayout (page) {
  return <LayoutContainer id='app-layout'>{page}</LayoutContainer>
}
