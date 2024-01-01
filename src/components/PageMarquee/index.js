import { CustomMarquee, PageMarqueeWrapper, PreText } from './styles'

export default function PageMarquee ({ bannerText }) {
  return (
    <PageMarqueeWrapper id='page-marquee'>
      {bannerText && (
        <CustomMarquee pauseOnHover speed={100}>
          <PreText>{bannerText}</PreText>
        </CustomMarquee>
      )}
    </PageMarqueeWrapper>
  )
}
