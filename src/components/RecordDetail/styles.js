import styled from 'styled-components'
import Image from 'next/image'
import { BodyText } from '../Text'
import { devices } from '@/lib/devices'
import { fonts } from '@/lib/fonts'

export const AlbumInfo = styled.div`
  display: grid;
  grid-area: album-info;
  @media ${devices.md} {
    margin-top: 1rem;
    align-content: flex-start;
  }
  @media ${devices.lg} {
    align-items: center;
    justify-self: flex-start;
  }
`
export const ImageContainer = styled.div`
  grid-area: album-art;
  width: 100%;
  height: 100%;
  justify-self: center;
  @media ${devices.lg} {
    max-width: 30rem;
    justify-self: flex-start;
  }
`
export const TracklistContainer = styled.div`
  grid-area: tracklist;
  width: 100%;
`
export const LinkText = styled(BodyText)`
  grid-area: album-link;
`
export const RecordImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
export const ReleaseContent = styled.div`
  display: grid;
  grid-template-areas:
    'album-art'
    'album-info'
    'tracklist'
    'album-link';
  row-gap: 0.5rem;
  align-items: center;
  justify-items: start;
  @media ${devices.lg} {
    grid-template-areas:
      'album-art album-info album-info album-info'
      'tracklist tracklist tracklist tracklist'
      'album-link . . .';
    column-gap: 1rem;
  }
  @media ${devices.lg} {
    row-gap: 2rem;
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
