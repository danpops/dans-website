import { getWindowLayout } from '@/components/Layout'
import { ContentContainer } from '@/components/Layout/styles'
import { Heading4 } from '@/components/Text'
import styled from 'styled-components'

const ErrorContainer = styled(ContentContainer)`
  justify-items: center;
  padding: 2rem 1rem;
  text-align: center;
`
export function getStaticProps () {
  const id = 'error'
  const title = 'Error'
  return { props: { id, title } }
}
export default function NotFoundPage () {
  return (
    <ErrorContainer id='error-content'>
      <Heading4 style={{ color: 'red' }}>Page Not Found!</Heading4>
      <Heading4>
        Whatever you are looking for, you won't find it here...
      </Heading4>
    </ErrorContainer>
  )
}

NotFoundPage.getLayout = getWindowLayout
