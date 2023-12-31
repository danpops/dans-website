import styled from 'styled-components'
import Image from 'next/image'
import { devices } from '@/design/devices'

export const GifButtonContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  cursor: pointer;
`
export const HomerGif = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 2rem;
  right: -3rem;
  @media ${devices.lg} {
    right: -2rem;
    bottom: 0;
  }
`
export const StickyGif = styled(Image)`
  width: 10rem;
  height: 10rem;
`
