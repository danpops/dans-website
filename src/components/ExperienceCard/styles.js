import { devices } from '@/design/devices'
import Image from 'next/image'
import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;
`
export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-auto-flow: row;
  column-gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
`
export const CompanyImage = styled(Image)`
  height: 5rem;
  width: 5rem;
  margin-right: 1rem;
  filter: grayscale(100%) sepia(100%) hue-rotate(-50deg) brightness(1.2)
    contrast(1.2);
  @media ${devices.lg} {
    width: 8rem;
    height: 8rem;
    margin-right: 2rem;
  }
`
export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
`
export const DetailsContainer = styled.div``
