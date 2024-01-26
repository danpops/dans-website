import styled from 'styled-components'
import Image from 'next/image'
import { devices } from '@/lib/devices'

export const StickyWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 0.75rem;
  width: 100vw;
  cursor: pointer;

  @media ${devices.lg} {
    bottom: 1.2rem;
  }
`
export const StickyImage = styled(Image)`
  width: 10rem;
  height: 10rem;
  ${props => (props.$inverted ? 'filter: invert(100%);' : '')}
`
