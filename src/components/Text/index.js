import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'
import styled from 'styled-components'

export const Heading1 = styled.h1`
  font-size: ${fonts.xl};
  line-height: 2rem;

  @media ${devices.md} {
    font-size: ${fonts.xxl};
  }
`
export const Heading2 = styled.h2`
  font-size: ${fonts.lg};
  line-height: 2rem;

  @media ${devices.md} {
    font-size: ${fonts.xl};
  }
`
export const Heading3 = styled.h3`
  font-size: ${fonts.md};
  line-height: 1rem;
  margin: 0;

  @media ${devices.md} {
    font-size: ${fonts.lg};
  }
`
export const Heading4 = styled.h4`
  font-size: ${fonts.sm};
  line-height: 1rem;
  margin: 0;

  @media ${devices.md} {
    font-size: ${fonts.md};
  }
`
export const Heading5 = styled.h5`
  line-height: 1rem;
`
export const Heading6 = styled.h6`
  line-height: 1rem;
`
export const BodyText = styled.div`
  line-height: 2rem;
  font-size: ${fonts.sm};

  @media ${devices.md} {
    font-size: ${fonts.md};
  }
`
export const Anchor = styled.a``
export const TableBodyText = styled(BodyText)`
  padding: 0;
`
