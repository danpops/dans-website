import homerGif from 'public/gifs/homer.gif'
import { StickyImageWrapper, StickyImage, MarqueeWrapper } from './styles'
import { useTheme } from '../ThemeProvider'
import Marquee from 'react-fast-marquee'
import { useState } from 'react'

export default function StickyGif () {
  const { isDarkMode } = useTheme()
  const [isAnimated, setAnimated] = useState(false)

  const onToggleHomer = () => setAnimated(!isAnimated)

  return (
    <MarqueeWrapper id='sticky-gif'>
      <Marquee speed={100} play={isAnimated}>
        <StickyImageWrapper>
          <StickyImage
            src={homerGif}
            alt='homer gif'
            priority
            $inverted={isDarkMode}
            onClick={onToggleHomer}
          />
        </StickyImageWrapper>
      </Marquee>
    </MarqueeWrapper>
  )
}
