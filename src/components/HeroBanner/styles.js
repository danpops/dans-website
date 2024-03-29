import Image from 'next/image'
import styled from 'styled-components'
import { devices } from '@/lib/devices'
import { borderStyle, hoverBorder } from '@/lib/global'
import { fonts } from '@/lib/fonts'

export const HeroTitle = styled.div`
  color: ${props => props.theme.heroTitle};
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
  row-gap: 1rem;
  padding: 2rem;
  ${props => borderStyle(props)}
  @media ${devices.lg} {
    row-gap: 1.5rem;
  }
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
  ${props => (props.$inverted ? 'filter: invert(100%);' : '')}
  @media ${devices.lg} {
    width: 6rem;
    height: 4rem;
  }
`
export const WelcomeImg = styled(Image)`
  width: 15rem;
  height: 5rem;

  ${props => (props.$inverted ? 'filter: invert(100%);' : '')}

  @media ${devices.md} {
    width: 22rem;
    height: 8rem;
  }
  @media ${devices.lg} {
    width: 30rem;
    height: 10rem;
  }
`
export const LinkContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, minmax(0, auto));
  align-items: flex-end;
  justify-items: stretch;
  column-gap: 2rem;
  margin: 0.5rem 0;
`
export const LinkImage = styled(Image)`
  display: grid;
  cursor: pointer;
  ${props => (props.$inverted ? 'filter: invert(100%);' : '')}
`
export const ResumeLink = styled.a`
  display: grid;
  z-index: 1000;
  align-items: center;
  justify-items: center;
  padding: 0.3rem 2rem;
  font-size: ${fonts.sm};
  color: ${props => props.theme.font} !important;
  background-color: ${props => props.theme.secondary};
  ${props => borderStyle(props)}
  &:active {
    ${props => hoverBorder(props)}
  }
`
