import { useRouter } from 'next/router'
import { LogoContainer, LogoTitle } from './styles'

export default function Logo () {
  const router = useRouter()
  const goHome = () => router.push('/')

  return (
    <LogoContainer id='page-logo'>
      <LogoTitle onClick={goHome}>Dan Popovic</LogoTitle>
    </LogoContainer>
  )
}
