import useTypewriter from '@/hooks/useTypewriter'
import { StaticText, DynamicText, TypewriterContainer } from './styles'

export default function Typewriter ({ content }) {
  const typewriterText = useTypewriter(content)
  return (
    <TypewriterContainer id='typewriter'>
      <StaticText id='typewriter-static-text'>I am a</StaticText>
      <DynamicText id='typerwriter-dynamic-text'>{typewriterText}</DynamicText>
    </TypewriterContainer>
  )
}
