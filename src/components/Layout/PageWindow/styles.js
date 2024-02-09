import styled from 'styled-components'
import { devices } from '@/lib/devices'

export const WindowBody = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  padding: 0.5rem;
  row-gap: 1rem;

  @media ${devices.md} {
    padding: 2rem 3rem;
  }
  @media ${devices.lg} {
    padding: 3rem 8rem 2rem;
  }
`
