import Image from 'next/image'
import styled from 'styled-components'
import { Heading1 } from '@/components/Text'
import { colors } from '@/design/colors'
import { devices } from '@/design/devices'
import { WindowContainer } from '../Layout/styles'

export const HeroTitle = styled(Heading1)`
  -webkit-text-stroke: 0.04rem ${colors.black};
  text-align: center;
  color: ${colors.yellow};
  line-height: 2rem;

  @media ${devices.md} {
    -webkit-text-stroke: 0.08rem ${colors.black};
  }
`
export const HeroContainer = styled(WindowContainer)`
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
