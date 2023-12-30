import { colors } from '@/design/colors'
import { fonts } from '@/design/fonts'
import { borderStyle } from '@/design/global'
import styled, { keyframes } from 'styled-components'

const scrollAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`

export const FooterBannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${colors.yellow};
  color: ${colors.blue};
  font-size: ${fonts.lg};
  font-weight: 700;
  ${borderStyle}
  width: 100%;
  padding: 1rem 0;
`
export const ScrollingTextWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`
export const MarqueeText = styled.div`
  white-space: nowrap;
  animation: ${scrollAnimation} 10s linear infinite;
`
