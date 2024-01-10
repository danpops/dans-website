import { Heading3, Heading4 } from '../Text'
import { ErrorContainer } from './styles'

export default function ErrorMessage () {
  return (
    <ErrorContainer id='error-content'>
      <Heading3 style={{ color: 'red' }}>Page Not Found!</Heading3>
      <Heading4>
        Whatever you are looking for, you won't find it here...
      </Heading4>
    </ErrorContainer>
  )
}
