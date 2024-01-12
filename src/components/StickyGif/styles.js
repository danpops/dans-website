import styled from 'styled-components'
import Image from 'next/image'
import { devices } from '@/lib/devices'

export const StickyWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  bottom: 2rem;
  right: -3rem;
  cursor: pointer;
  
  @media ${devices.lg} {
    right: -2rem;
    bottom: 0;
  }
`
export const StickyImage = styled(Image)`
  width: 10rem;
  height: 10rem;
`
