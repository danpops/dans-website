import styled from 'styled-components'
import Image from 'next/image'
import { borderStyle, hoverBorder } from '@/lib/global'
import { fonts } from '@/lib/fonts'
import { devices } from '@/lib/devices'

export const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(50, minmax(0, auto));
  row-gap: 0.5rem;
  margin: 0.5rem 0;

  @media ${devices.lg} {
    column-gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(25, 1fr);
  }
`
export const CardWrapper = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-content: center;
  background-color: ${props => props.theme.table.header};
  padding: 0.5rem;
  ${borderStyle}
  cursor: pointer;
  &:active {
    ${hoverBorder}
  }
`
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
`
export const CardImageContainer = styled.div`
  width: 7rem;
  height: 7rem;
`
export const RecordImage = styled(Image)`
  object-fit: contain;
  width: 7rem;
  height: 7rem;
`
export const CardDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  text-decoration: none;
  font-family: 'MS Sans Serif';
  text-align: start;
  color: ${props => props.theme.font};
  align-items: center;
  margin: 0;
  padding: 1rem;
`
export const CardTitle = styled.div`
  font-size: ${fonts.sm};
  font-weight: 600;
  white-space: pre-wrap;
  overflow: hidden;
`
export const CardArtist = styled.div`
  font-size: ${fonts.sm};
`
export const DiscogsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  row-gap: 0.5rem;
  padding: 0.5rem;
`
export const SortingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(0, auto));
  padding: 0.25rem;
  ${hoverBorder}
  outline: none;

  @media ${devices.lg} {
    max-width: 25rem;
  }
`
export const ToggleGroupWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-template-rows: 1fr;
`
