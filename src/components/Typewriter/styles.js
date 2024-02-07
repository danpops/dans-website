import styled from 'styled-components'
import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'

export const TypewriterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease;
  align-self: start;
  font-size: ${fonts.md};
  text-align: start;

  @media ${devices.md} {
    font-size: ${fonts.lg};
  }
`
export const StaticText = styled.p`
  text-align: start;
  color: ${({ theme }) => theme.font};
`
export const DynamicText = styled(StaticText)`
  padding: 0 0.5rem;
  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  ${({ theme }) => `
    &::after {
      content: '|';
      color: ${theme.buttonDisabled};
      animation: blink 1s infinite;
    }
  `}
`
