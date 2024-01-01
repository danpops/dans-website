import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { borderStyle } from '@/design/global'
import styled from 'styled-components'

export const FullPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  width: 100%;
  background-color: ${colors.lightGrey};
  color: ${colors.black};
`
export const PageContainer = styled.div`
  overflow: scroll;
  height: 100%;
  background-color: ${colors.darkGreen};
  padding: 1rem;

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
  background-color: ${colors.grey};
  ${borderStyle}
`
export const ContentContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 1rem;

  @media ${devices.md} {
    row-gap: 2rem;
  }
  @media ${devices.lg} {
    row-gap: 3rem;
  }
`
