import { CustomMarquee, PageMarqueeWrapper } from './styles'

export default function PageMarquee ({ bannerText }) {
  return (
    <PageMarqueeWrapper id='page-marquee'>
      {bannerText && (
        <CustomMarquee pauseOnHover speed={100}>
          <pre>{bannerText}</pre>
        </CustomMarquee>
      )}
    </PageMarqueeWrapper>
  )
}
