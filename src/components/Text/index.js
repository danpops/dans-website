import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import styled from 'styled-components'

export const Heading1 = styled.h1`
  font-size: ${fonts.xl};
  line-height: 1rem;

  @media ${devices.md} {
    font-size: ${fonts.xxl};
  }
`
export const Heading2 = styled.h2`
  font-size: ${fonts.lg};
  line-height: 0.75rem;

  @media ${devices.md} {
    font-size: ${fonts.xl};
  }
`
export const Heading3 = styled.h3`
  font-size: ${fonts.md};
  line-height: 1.25rem;

  @media ${devices.md} {
    font-size: ${fonts.lg};
  }
`
export const Heading4 = styled.h4`
  font-size: ${fonts.sm};
  line-height: 0.75rem;

  @media ${devices.md} {
    font-size: ${fonts.md};
  }
`
export const Heading5 = styled.h5`
  line-height: 0.75rem;
`
export const Heading6 = styled.h6`
  line-height: 0.75rem;
`
export const BodyText = styled.div`
  line-height: 2rem;
  font-size: ${fonts.md};

  @media ${devices.md} {
    font-size: ${fonts.lg};
  }
`
