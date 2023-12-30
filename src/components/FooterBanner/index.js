import { uselessFacts } from '@/assets/data/facts'
import { useEffect, useState } from 'react'
import {
  FooterBannerWrapper,
  MarqueeText,
  ScrollingTextWrapper
} from './styles'

export default function FooterBanner () {
  const [currentFactIndex, setCurrentFactIndex] = useState(null)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * uselessFacts.length)
    setCurrentFactIndex(randomIndex)
  }, [])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * uselessFacts.length)
    const interval = setInterval(() => {
      setCurrentFactIndex(randomIndex)
    }, 25000)

    return () => clearInterval(interval)
  }, [uselessFacts, currentFactIndex])

  return (
    <FooterBannerWrapper id='random-facts-banner'>
      <ScrollingTextWrapper>
        {currentFactIndex !== null && (
          <MarqueeText>{uselessFacts[currentFactIndex]}</MarqueeText>
        )}
      </ScrollingTextWrapper>
    </FooterBannerWrapper>
  )
}
