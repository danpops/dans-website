import { content } from '@/assets/data/content'
import { getDefaultLayout } from '@/components/Layout'
import { BodyText } from '@/components/Text'
import Image from 'next/image'
import computerGif from '@/assets/gifs/computer.gif'

export function getStaticProps () {
  const id = 'about'
  const title = content.about.title
  return { props: { id, title, showBack: true } }
}
export default function AboutPage () {
  return (
    <div>
      <Image src={computerGif} alt='computer gif' width={150} />
      <BodyText id='about-text'>{content.about.text}</BodyText>
    </div>
  )
}

AboutPage.getLayout = getDefaultLayout
