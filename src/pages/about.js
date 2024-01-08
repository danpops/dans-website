import { getWindowLayout } from '@/components/Layout'
import { BodyText } from '@/components/Text'
import Image from 'next/image'
import { ContentContainer } from '@/components/Layout/styles'
import { querySanity } from '../../sanity/query'

export default function AboutPage ({ data }) {
  return (
    <ContentContainer>
      <Image
        src={data.aboutGif.image}
        alt={data.aboutGif.alt}
        width={125}
        height={125}
      />
      <BodyText id='about-text'>{data.heading}</BodyText>
      <BodyText id='about-summary'>{data.summary}</BodyText>
    </ContentContainer>
  )
}
export async function getServerSideProps () {
  const id = 'about'
  const data = await querySanity(
    `*[_type == "about"]{
      _id,
      title,
      heading,
      summary,
      aboutGif {alt, "image": asset->url}
    }`
  )
  const title = data.title
  return { props: { id, title, data } }
}

AboutPage.getLayout = getWindowLayout
