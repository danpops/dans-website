import { PageContainer, FullPageContainer, WindowContainer } from './styles'
import Navigation from '../Navigation'
import PageMarquee from '../PageMarquee'
import { content } from '@/assets/data/content'
import StickyGif from '../StickyGif'
import PageWindow from '../PageWindow'

export { getDefaultLayout, getHeroLayout }

function getHeroLayout (page, { id }) {
  return (
    <DefaultLayout id={id}>
      <WindowContainer id={`${id}-window`}>{page}</WindowContainer>
    </DefaultLayout>
  )
}
function getDefaultLayout (page, { id, title, hasHomeButton = false }) {
  return (
    <DefaultLayout id={id}>
      <PageWindow id={id} title={title}>
        {page}
      </PageWindow>
    </DefaultLayout>
  )
}
function DefaultLayout ({ id, children }) {
  return (
    <FullPageContainer id='app-layout'>
      <Navigation />
      <PageMarquee bannerText={content.hero.subtitle} />
      <PageContainer id={id}>{children}</PageContainer>
      <StickyGif />
    </FullPageContainer>
  )
}
