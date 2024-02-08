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
  margin-bottom: 2rem;
  @media ${devices.md} {
    margin-bottom: 2rem;
  }
  @media ${devices.lg} {
    margin-bottom: 4rem;
  }
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
    padding: 2rem 15rem 0;
  }
  @media ${devices.xl} {
    padding: 1rem 30rem 0;
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
  row-gap: 1rem;

  @media ${devices.md} {
    row-gap: 2rem;
  }
`
export const WindowsContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  row-gap: 0.5rem;

  @media ${devices.md} {
    row-gap: 0.75rem;
  }
  @media ${devices.lg} {
    row-gap: 1rem;
  }
`
