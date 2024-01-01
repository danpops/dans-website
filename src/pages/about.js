import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import { BodyText } from '@/components/Text'
import Image from 'next/image'
import computerGif from '@/assets/gifs/computer.gif'
import { ContentContainer } from '@/components/Layout/styles'

export function getStaticProps () {
  const id = 'about'
  const title = content.about.title
  return { props: { id, title, hasHomeButton: true } }
}
export default function AboutPage () {
  return (
    <ContentContainer>
      <Image src={computerGif} alt='computer gif' width={150} />
      <BodyText id='about-text'>{content.about.text}</BodyText>
    </ContentContainer>
  )
}

AboutPage.getLayout = getDefaultLayout
