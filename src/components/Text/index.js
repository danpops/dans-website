import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
import styled from 'styled-components'

export const Heading1 = styled.h1`
  font-size: ${fonts.xl};

  @media ${devices.md} {
    font-size: ${fonts.xxl};
  }
`
export const Heading2 = styled.h2`
  font-size: ${fonts.lg};

  @media ${devices.md} {
    font-size: ${fonts.xl};
  }
`
export const Heading3 = styled.h3`
  font-size: ${fonts.md};

  @media ${devices.md} {
    font-size: ${fonts.lg};
  }
`
export const Heading4 = styled.h4`
  font-size: ${fonts.sm};

  @media ${devices.md} {
    font-size: ${fonts.md};
  }
`
export const Heading5 = styled.h5``
export const Heading6 = styled.h6``
export const BodyText = styled.p`
  font-size: ${fonts.md};

  @media ${devices.md} {
    font-size: ${fonts.lg};
  }
`
