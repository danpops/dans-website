import styled from 'styled-components'
import Image from 'next/image'
import { BodyText } from '../Text'
import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'

export const AlbumInfo = styled.div`
  display: grid;
  @media ${devices.lg} {
    grid-row: 1 / span 1;
    grid-column: 2 / span 1;
    align-items: flex-start;
    justify-items: flex-start;
  }
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-self: center;
  @media ${devices.lg} {
    max-width: 30rem;
    justify-self: flex-start;
    grid-row: 1 / span 1;
    grid-column: 1 / span 1;
  }
`
export const TracklistContainer = styled.div`
  width: 100%;
  @media ${devices.lg} {
    grid-row: 2 / span 1;
    grid-column: 1 / span 2;
  }
`
export const LinkText = styled(BodyText)`
  @media ${devices.lg} {
    grid-row: 3 / span 1;
    grid-column: 1 / span 2;
  }
`
export const RecordImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
export const ReleaseContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  row-gap: 0.5rem;
  @media ${devices.lg} {
    align-items: center;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, auto));
    row-gap: 1rem;
    column-gap: 1rem;
  }
`
export const ReleaseText = styled(BodyText)`
  font-weight: bold;
  color: ${props => props.theme.font};

  @media ${devices.lg} {
    font-size: ${fonts.lg} !important;
  }
`
export const Span = styled.span`
  font-weight: normal;
`
