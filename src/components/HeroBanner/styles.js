import Image from 'next/image'
import styled from 'styled-components'
import { Heading1 } from '@/components/Text'
import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { SectionContainer } from '../Layout/styles'
import { fonts } from '@/design/fonts'

export const HeroTitle = styled(Heading1)`
  -webkit-text-stroke: 0.08rem ${colors.black};
  text-align: center;
  color: ${colors.yellow};
  font-size: ${fonts.xxl};
  line-height: 2.5rem;
`
export const HeroContainer = styled(SectionContainer)`
  justify-items: center;
  text-align: center;
  row-gap: 0;
`
export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  margin: 1rem 0;
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
