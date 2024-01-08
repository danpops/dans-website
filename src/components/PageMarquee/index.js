import { CustomMarquee, PageMarqueeWrapper, PreText } from './styles'

const MARQUEE_TEXT =
  'Passionate Software Engineer dedicated to crafting seamless, impactful digital solutions. '
export default function PageMarquee () {
  return (
    <PageMarqueeWrapper id='page-marquee'>
      <CustomMarquee speed={100}>
        <PreText>{MARQUEE_TEXT}</PreText>
      </CustomMarquee>
    </PageMarqueeWrapper>
  )
}
