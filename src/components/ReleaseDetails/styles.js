import styled from 'styled-components'
import Image from 'next/image'
import { BodyText } from '../Text'
import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'

const barStyle = `
  display: grid;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 0 0.5rem;
`
export const AlbumHeading = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(0, auto));
  align-content: flex-start;

  @media ${devices.md} {
    grid-template-columns: 1fr 0.95fr;
    grid-template-rows: auto;
    column-gap: 1rem;
  }
  @media ${devices.lg} {
    column-gap: 2rem;
  }
`
export const AlbumTextContainer = styled.div`
  font-size: ${fonts.md} !important;
  @media ${devices.lg} {
    font-size: ${fonts.lg} !important;
  }
`
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  @media ${devices.md} {
    align-items: flex-start;
    margin-top: 1rem;
  }
`
export const AlbumInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, auto));
  padding: 0.5rem;
  grid-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  @media ${devices.md} {
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media ${devices.lg} {
    align-items: center;
    grid-gap: 1rem;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`
export const TracklistContainer = styled.div`
  width: 100%;
`
export const LinkText = styled(BodyText)``
export const RecordImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
export const ReleaseContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, minmax(0, auto));
  align-items: flex-start;
  row-gap: 0.5rem;
  @media ${devices.md} {
    row-gap: 2rem;
  }
`
export const ReleaseText = styled.div`
  font-weight: bold;
  color: ${props => props.theme.font};
`
export const Span = styled.span`
  font-weight: normal;
`
export const BarContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 1rem;
  margin: 0.75rem 0;
  justify-self: center;
  width: 100%;
`
export const HaveBar = styled.div`
  ${barStyle}
  width: ${props => props.have}%;
  color: ${props => props.theme.windowTitle};
  background-color: ${props => props.theme.windowHeader};
`
export const WantBar = styled.div`
  ${barStyle}
  width: ${props => props.want}%;
  color: ${props => props.theme.font};
  background-color: ${props => props.theme.marquee};
`
export const BarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(0, auto));
  row-gap: 0.5rem;
`
export const BarText = styled(BodyText)`
  margin-left: 0.25rem;
  font-weight: 500;
`
