import styled from 'styled-components'
import Image from 'next/image'
import { devices } from '@/design/devices'

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-auto-flow: row;
  padding: 1rem;
`
export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  column-gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1rem;
`
export const AlbumTextContainer = styled.div`
  padding: 0;
  margin: 0;
`
export const RecordImage = styled(Image)`
  width: 8rem;
  height: 8rem;
  cursor: pointer;

  @media ${devices.lg} {
    width: 12rem;
    height: 12rem;
  }
`
export const AlbumText = styled.p`
  margin: 0;

  span {
    font-weight: bold;
  }
`
