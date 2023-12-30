import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FooterBannerWrapper } from './styles'
import Marquee from 'react-fast-marquee'

const FACT_URL = 'http://numbersapi.com/random'

export default function FooterBanner () {
  const [currentFact, setCurrentFact] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchRandomFact = async () => {
      try {
        const response = await fetch(FACT_URL)
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }

        const data = await response.text()
        setCurrentFact(`${data} `)
      } catch (error) {
        console.error('Error fetching random fact:', error)
        setCurrentFact('No facts right now :(')
      }
    }

    fetchRandomFact()
  }, [router.pathname])

  return (
    <FooterBannerWrapper id='random-facts-banner'>
      {currentFact && (
        <Marquee pauseOnHover speed={100}>
          <pre>{currentFact}</pre>
        </Marquee>
      )}
    </FooterBannerWrapper>
  )
}
