import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { fonts } from '@/design/fonts'
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
export const WindowHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  padding: 0.35rem;
`
export const WindowBody = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  padding: 1rem;

  @media ${devices.md} {
    padding: 2rem 3rem;
  }
  @media ${devices.lg} {
    padding: 3rem 8rem;
  }
`
export const PageTitle = styled.div`
  color: ${colors.white};
  background-color: ${colors.darkBlue};
  font-size: ${fonts.sm};
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
`
export const ContentContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: 1rem;
`
