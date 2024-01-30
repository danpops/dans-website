import { PageContainer, FullPageContainer, WindowContainer } from './styles'
import Navigation from './Navigation'
import PageMarquee from './PageMarquee'
import StickyGif from './StickyGif'
import PageWindow from './PageWindow'

export { getDefaultLayout, getWindowLayout, getHeroLayout }

function getDefaultLayout (page, { id }) {
  return <DefaultLayout id={id}>{page}</DefaultLayout>
}
function getHeroLayout (page, { id }) {
  return (
    <DefaultLayout id={id}>
      <WindowContainer id={`${id}-window`}>{page}</WindowContainer>
    </DefaultLayout>
  )
}
function getWindowLayout (page, { id, title, onExit }) {
  return (
    <DefaultLayout id={id}>
      <PageWindow id={id} title={title} onExit={onExit}>
        {page}
      </PageWindow>
    </DefaultLayout>
  )
}
function DefaultLayout ({ id, children }) {
  return (
    <FullPageContainer id='app-layout'>
      <Navigation />
      <PageMarquee />
      <PageContainer id={id}>{children}</PageContainer>
      <StickyGif />
    </FullPageContainer>
  )
}
