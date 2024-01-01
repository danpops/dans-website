import {
  PageContainer,
  FullPageContainer,
  PageTitle,
  WindowContainer,
  WindowHeader,
  WindowBody
} from './styles'
import Navigation from '../Navigation'
import PageMarquee from '../PageMarquee'
import { content } from '@/assets/data/content'
import StickyGif from '../StickyGif'

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
function PageWindow ({ children, id, title }) {
  return (
    <WindowContainer id={`${id}-window`}>
      <WindowHeader>
        <PageTitle id={`${id}-title`}>{title}</PageTitle>
      </WindowHeader>
      <WindowBody>{children}</WindowBody>
    </WindowContainer>
  )
}
