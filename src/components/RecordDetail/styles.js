import styled from 'styled-components'
import Image from 'next/image'
import { BodyText } from '../Text'
import { devices } from '@/lib/devices'

export const AlbumInfo = styled.div`
  display: grid;
  grid-area: album-info;
  @media ${devices.md} {
    margin-top: 1rem;
    align-content: flex-start;
  }
  @media ${devices.lg} {
    align-content: center;
  }
`
export const ImageContainer = styled.div`
  grid-area: album-art;
  width: 100%;
  height: 100%;
  max-height: 18rem;
  justify-self: center;
  @media ${devices.md} {
    max-width: 25rem;
    max-height: 25rem;
  }
`
export const LinkText = styled(BodyText)`
  grid-area: album-link;
`
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
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
    'album-link';
  justify-content: flex-start;
  row-gap: 0.5rem;
  align-content: center;
  padding: 1rem;
  @media ${devices.md} {
    grid-template-areas:
      'album-art album-info'
      'album-art album-link';
    column-gap: 2rem;
    margin-bottom: 1rem;
  }
  @media ${devices.lg} {
    padding: 2rem;
  }
`
export const ReleaseText = styled(BodyText)`
  font-weight: bold;
  color: ${props => props.theme.font};
`
export const Span = styled.span`
  font-weight: normal;
`
export const WindowWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 90%;
  @media ${devices.lg} {
    max-width: 45rem;
  }
  @media ${devices.lg} {
    max-width: 60rem;
  }
`
