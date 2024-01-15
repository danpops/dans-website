import homerGif from 'public/gifs/homer.gif'
import { StickyImage, StickyWrapper } from './styles'
import { useRouter } from 'next/router'
import { useTheme } from '../ThemeProvider'

export default function StickyGif () {
  const router = useRouter()
  const visible = router.pathname !== '/records'
  const { isDarkMode } = useTheme()

  if (!visible) return

  return (
    <StickyWrapper id='sticky-gif'>
      <StickyImage
        src={homerGif}
        alt='homer gif'
        priority
        $inverted={isDarkMode}
      />
    </StickyWrapper>
  )
}
