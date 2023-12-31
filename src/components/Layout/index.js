import {
  PageContainer,
  FullPageContainer,
  PageTitle,
  WindowContainer
} from './styles'
import Navigation from '../Navigation'
import PageMarquee from '../PageMarquee'
import { content } from '@/assets/data/content'
import HomeButton from '../HomeButton'
import StickyGif from '../StickyGif'

export { getDefaultLayout }

function getDefaultLayout (page, { id, title, hasHomeButton = false }) {
  return (
    <FullPageContainer id='app-layout'>
      <Navigation />
      <PageMarquee bannerText={content.hero.subtitle} />
      <PageContainer id={id}>
        <WindowContainer id={`${id}-section`}>
          {title && <PageTitle id={`${id}-title`}>{title}</PageTitle>}
          {page}
          {hasHomeButton && <HomeButton />}
        </WindowContainer>
      </PageContainer>
      <StickyGif />
    </FullPageContainer>
  )
}
