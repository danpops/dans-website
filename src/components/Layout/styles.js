import { devices } from '@/lib/devices'
import { borderStyle } from '@/lib/global'
import styled from 'styled-components'

export const FullPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.font};
`
export const PageContainer = styled.div`
  overflow: scroll;
  height: 100%;
  background-color: ${props => props.theme.primary};
  padding: 0.5rem;

  @media ${devices.md} {
    padding: 1rem 4rem;
  }
  @media ${devices.lg} {
    padding: 3rem 15rem 0;
  }
  @media ${devices.xl} {
    padding: 4rem 30rem 0;
  }
`
export const WindowContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  background-color: ${props => props.theme.secondary};
  ${props => borderStyle(props)}
`
export const ContentContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 0.5rem;

  @media ${devices.md} {
    row-gap: 2rem;
  }
`
