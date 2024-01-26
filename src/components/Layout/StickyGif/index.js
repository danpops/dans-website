import homerGif from 'public/gifs/homer.gif'
import { StickyImage, StickyWrapper } from './styles'
import { useRouter } from 'next/router'
import { useTheme } from '../ThemeProvider'
import Marquee from 'react-fast-marquee'
import { useState } from 'react'

export default function StickyGif () {
  const router = useRouter()
  const visible = router.pathname !== '/records'
  const { isDarkMode } = useTheme()
  const [isAnimated, setIsAnimated] = useState(false)

  const onToggleHomer = () => setIsAnimated(!isAnimated)

  if (!visible) return null

  return (
    <StickyWrapper id='sticky-gif' onClick={onToggleHomer}>
      <Marquee speed={100} play={isAnimated}>
        <StickyImage
          src={homerGif}
          alt='homer gif'
          priority
          $inverted={isDarkMode}
        />
      </Marquee>
    </StickyWrapper>
  )
}
