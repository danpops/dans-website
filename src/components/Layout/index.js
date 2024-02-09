import { PageContainer, FullPageContainer, WindowContainer } from './styles'
import Navigation from './Navigation'
import PageMarquee from './PageMarquee'
import StickyGif from './StickyGif'
import PageWindow from './PageWindow'

export { getDefaultLayout, getWindowLayout, getHeroLayout }

function getDefaultLayout (page, { id, showMarquee, showHomer }) {
  return (
    <DefaultLayout id={id} showMarquee={showMarquee} showHomer={showHomer}>
      {page}
    </DefaultLayout>
  )
}
function getHeroLayout (page, { id }) {
  return (
    <DefaultLayout id={id}>
      <WindowContainer id={`${id}-window`}>{page}</WindowContainer>
    </DefaultLayout>
  )
}
function getWindowLayout (page, props) {
  const { id, title, showMarquee, showHomer, showCopyright, onExit } = props
  return (
    <DefaultLayout id={id} showMarquee={showMarquee} showHomer={showHomer}>
      <PageWindow
        id={id}
        title={title}
        onExit={onExit}
        showCopyright={showCopyright}
      >
        {page}
      </PageWindow>
    </DefaultLayout>
  )
}
function DefaultLayout ({ id, children, showHomer = true, showMarquee = true }) {
  return (
    <FullPageContainer id='app-layout'>
      <Navigation />
      {showMarquee && <PageMarquee />}
      <PageContainer id={id}>{children}</PageContainer>
      {showHomer && <StickyGif />}
    </FullPageContainer>
  )
}
