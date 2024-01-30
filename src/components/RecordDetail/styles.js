import styled from 'styled-components'
import Image from 'next/image'
import { BodyText } from '../Text'
import { devices } from '@/lib/devices'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`
export const WindowWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 80%;
  @media ${devices.md} {
    width: 60rem;
  }
`
export const ReleaseContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, minmax(0, auto));
  row-gap: 0.5rem;
  align-content: center;
  padding: 1rem;
  @media ${devices.md} {
    padding: 3rem;
  }
`
export const ReleaseText = styled(BodyText)`
  font-weight: bold;
  color: ${props => props.theme.font};
`
export const Span = styled.span`
  font-weight: normal;
`
export const ImageContainer = styled.div`
  width: 14rem;
  height: 14rem;
`
export const RecordImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
