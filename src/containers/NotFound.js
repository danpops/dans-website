import { ContentContainer } from '@/components/Layout/styles'
import { Heading4 } from '@/components/Text'

export default function NotFound () {
  return (
    <ContentContainer id='error-content'>
      <Heading4 style={{ color: 'red' }}>Page Not Found!</Heading4>
      <Heading4>
        Whatever you are looking for, you won't find it here...
      </Heading4>
    </ContentContainer>
  )
}
