import homerGif from 'public/gifs/homer.gif'
import { StickyImageWrapper, StickyImage, MarqueeWrapper } from './styles'
import { useRouter } from 'next/router'
import { useTheme } from '../ThemeProvider'
import Marquee from 'react-fast-marquee'
import { useState } from 'react'

export default function StickyGif () {
  const router = useRouter()
  const visible = !router.pathname.includes('/records')
  const { isDarkMode } = useTheme()
  const [isAnimated, setAnimated] = useState(false)

  const onToggleHomer = () => setAnimated(!isAnimated)

  if (!visible) return null

  return (
    <MarqueeWrapper id='sticky-gif' onClick={onToggleHomer}>
      <Marquee speed={100} play={isAnimated}>
        <StickyImageWrapper>
          <StickyImage
            src={homerGif}
            alt='homer gif'
            priority
            $inverted={isDarkMode}
          />
        </StickyImageWrapper>
      </Marquee>
    </MarqueeWrapper>
  )
}
