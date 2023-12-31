import { FullPageContainer } from './styles'
import Navigation from '../Navigation'
import PageMarquee from '../PageMarquee'
import { content } from '@/assets/data/content'
import homerGif from '@/assets/gifs/homer.gif'
import { HomerGif, StickyGif } from '../GifButton/styles'

export { getDefaultLayout }

function getDefaultLayout (page) {
  return (
    <>
      <FullPageContainer id='app-layout'>
        <Navigation />
        <PageMarquee bannerText={content.hero.subtitle} />
        {page}
      </FullPageContainer>
      <HomerGif>
        <StickyGif src={homerGif} alt='homer gif' />
      </HomerGif>
    </>
  )
}
