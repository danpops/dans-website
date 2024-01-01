import Image from 'next/image'
import styled from 'styled-components'
import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { borderStyle } from '@/design/global'

export const HeroTitle = styled.div`
  color: ${colors.blue};
  font-size: 1.8rem;
  font-weight: bold;

  @media ${devices.md} {
    font-size: 2.75rem;
    margin-bottom: 1rem;
  }
  @media ${devices.lg} {
    font-size: 3rem;
  }
`
export const HeroContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-items: center;
  padding: 2rem;
  ${borderStyle}
`
export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, auto));
  column-gap: 0.5rem;
  text-align: center;
  align-items: center;

  @media ${devices.md} {
    column-gap: 1rem;
  }
  @media ${devices.lg} {
    column-gap: 2rem;
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
export const ContactImage = styled(Image)`
  display: grid;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  margin-top: 3rem;
`
