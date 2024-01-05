import { content } from '@/assets/data/content'
import { getWindowLayout } from '@/components/Layout'
import { BodyText } from '@/components/Text'
import Image from 'next/image'
import computerGif from 'public/gifs/computer.gif'
import { ContentContainer } from '@/components/Layout/styles'

export function getStaticProps () {
  const id = 'about'
  const title = content.about.title
  return { props: { id, title } }
}
export default function AboutPage () {
  return (
    <ContentContainer>
      <Image src={computerGif} alt='computer gif' width={125} />
      <BodyText id='about-text'>{content.about.text}</BodyText>
      <BodyText id='about-summary'>{content.about.summary}</BodyText>
    </ContentContainer>
  )
}

AboutPage.getLayout = getWindowLayout
