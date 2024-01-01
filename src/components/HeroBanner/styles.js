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
    margin-bottom: 1rem;
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
  
  @media ${devices.lg} {
    row-gap: 2rem;
  }
`
export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, auto));
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  width: 100%;
  text-align: center;
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
