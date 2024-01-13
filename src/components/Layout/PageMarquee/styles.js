import styled from 'styled-components'
import { fonts } from '@/lib/fonts'
import { borderStyle } from '@/lib/global'
import { devices } from '@/lib/devices'
import Marquee from 'react-fast-marquee'

export const PageMarqueeWrapper = styled.div`
  position: fixed;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  bottom: 0;
  ${props => borderStyle(props)}
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
  background-color: ${props => props.theme.marquee};
  color: ${props => props.theme.marqueeText};
  height: 2rem;

  @media ${devices.xl} {
    height: 2.5rem;
  }
`
export const PreText = styled.pre`
  display: grid;
  align-self: center;
  line-height: 0;
  font-family: 'MS Sans Serif', sans-serif !important;
  font-weight: 500;
  font-size: ${fonts.xs} !important;
  @media ${devices.md} {
    font-size: ${fonts.md} !important;
  }
  @media ${devices.lg} {
    font-size: ${fonts.lg} !important;
  }
`
