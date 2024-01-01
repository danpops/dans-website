import styled from 'styled-components'
import { colors } from '@/design/colors'
import { fonts } from '@/design/fonts'
import { borderStyle } from '@/design/global'
import { devices } from '@/design/devices'
import Marquee from 'react-fast-marquee'

export const PageMarqueeWrapper = styled.div`
  position: fixed;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  bottom: 0;
  ${borderStyle}
  width: 100%;
  z-index: 100;

  @media ${devices.lg} {
    top: 4rem;
    bottom: auto;
  }
  @media ${devices.xl} {
    top: 5rem;
  }
`
export const CustomMarquee = styled(Marquee)`
  background-color: ${colors.yellow};
  color: ${colors.blue};
  font-size: ${fonts.sm};
  font-weight: bold;
  height: 2rem;

  @media ${devices.md} {
    font-size: ${fonts.md};
  }
  @media ${devices.xl} {
    height: 2.5rem;
  }
`
export const PreText = styled.pre`
  display: grid;
  align-self: center;
  line-height: 0;
  font-family: 'MS Sans Serif', sans-serif !important;
`
