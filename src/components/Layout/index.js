import {
  PageContainer,
  FullPageContainer,
  PageTitle,
  WindowContainer
} from './styles'
import Navigation from '../Navigation'
import PageMarquee from '../PageMarquee'
import { content } from '@/assets/data/content'
import BackButton from '../BackButton'
import StickyGif from '../StickyGif'

export { getDefaultLayout }

function getDefaultLayout (page, { id, title, showBack = false }) {
  return (
    <FullPageContainer id='app-layout'>
      <Navigation />
      <PageMarquee bannerText={content.hero.subtitle} />
      <PageContainer id={id}>
        <WindowContainer id={`${id}-section`}>
          {title && <PageTitle id={`${id}-title`}>{title}</PageTitle>}
          {page}
          {showBack && <BackButton />}
        </WindowContainer>
      </PageContainer>
      <StickyGif />
    </FullPageContainer>
  )
}
