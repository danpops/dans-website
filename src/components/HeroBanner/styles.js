import Image from 'next/image'
import styled from 'styled-components'
import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { WindowContainer } from '../Layout/styles'

export const HeroTitle = styled.div`
  color: ${colors.blue};
  font-size: 1.8rem;
  font-weight: bold;

  @media ${devices.md} {
    font-size: 2.75rem;
  }
  @media ${devices.lg} {
    font-size: 4rem;
  }
`
export const HeroContainer = styled(WindowContainer)`
  justify-items: center;
  text-align: center;
  padding: 2rem 0;
  border: none;
  box-shadow: none;
  row-gap: 1rem;
`
export const TitleContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  margin: 1rem 0;
  width: 100%;

  @media ${devices.lg} {
    grid-template-rows: 1fr;
  }
`
export const MatrixGif = styled(Image)`
  width: 3rem;
  height: 2rem;
  @media ${devices.lg} {
    width: 6rem;
    height: 4rem;
  }
`
export const WelcomeImg = styled(Image)`
  width: 15rem;
  height: 5rem;

  @media ${devices.md} {
    width: 22rem;
    height: 8rem;
  }
  @media ${devices.lg} {
    width: 30rem;
    height: 10rem;
  }
`
