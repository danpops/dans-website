import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { Heading4 } from '@/components/Text'

export function getStaticProps () {
  const id = 'error'
  const title = 'Error'
  return { props: { id, title } }
}
export default function NotFoundPage () {
  return (
    <ContentContainer id='error-content'>
      <Heading4 style={{ color: 'red' }}>Page Not Found!</Heading4>
      <Heading4>
        Whatever you are looking for, you won't find it here...
      </Heading4>
    </ContentContainer>
  )
}

NotFoundPage.getLayout = getWindowLayout
