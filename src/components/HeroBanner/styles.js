import Image from 'next/image'
import styled from 'styled-components'
import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { SectionContainer } from '../Layout/styles'

export const HeroContainer = styled(SectionContainer)`
  justify-items: center;
  text-align: center;
`
export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: ${colors.yellow};
  margin-top: 1rem;
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
