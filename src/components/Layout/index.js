import { PageContainer, FullPageContainer, WindowContainer } from './styles'
import Navigation from './Navigation'
import PageMarquee from './PageMarquee'
import StickyGif from './StickyGif'
import PageWindow from './PageWindow'

export { getDefaultLayout, getWindowLayout, getHeroLayout }

function getDefaultLayout (page, { id, marquee, homer }) {
  return (
    <DefaultLayout id={id} marquee={marquee} homer={homer}>
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
  const { id, title, marquee, homer, copyright, onExit } = props
  return (
    <DefaultLayout id={id} marquee={marquee} homer={homer}>
      <PageWindow
        id={id}
        title={title}
        onExit={onExit}
        copyright={copyright}
      >
        {page}
      </PageWindow>
    </DefaultLayout>
  )
}
function DefaultLayout ({ id, children, homer = true, marquee = true }) {
  return (
    <FullPageContainer id='app-layout'>
      <Navigation />
      {marquee && <PageMarquee />}
      <PageContainer id={id}>{children}</PageContainer>
      {homer && <StickyGif />}
    </FullPageContainer>
  )
}
