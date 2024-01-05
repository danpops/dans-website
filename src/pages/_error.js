import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { Heading3, Heading4 } from '@/components/Text'

export function getStaticProps () {
  const id = 'error'
  const title = 'Error!!!'
  return { props: { id, title } }
}
export default function ErrorPage () {
  const contentStyle = {
    justifyItems: 'center',
    rowGap: 0,
    textAlign: 'center'
  }
  return (
    <ContentContainer id='error-content' style={contentStyle}>
      <Heading3 style={{ color: 'red' }}>Page Not Found!</Heading3>
      <Heading4>
        Whatever you are looking for, you won't find it here...
      </Heading4>
    </ContentContainer>
  )
}
ErrorPage.getLayout = getWindowLayout
