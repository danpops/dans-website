import homerGif from '@/assets/gifs/homer.gif'
import { StickyImage, StickyWrapper } from './styles'

export default function StickyGif () {
  return (
    <StickyWrapper>
      <StickyImage src={homerGif} alt='homer gif' />
    </StickyWrapper>
  )
}
