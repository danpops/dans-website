import Image from 'next/image'
import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
`
export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  grid-auto-flow: row;
  column-gap: 1rem;
  align-items: center;
  margin: 1rem 0;
`
export const CompanyImage = styled(Image)`
  width: 5rem;
  height: 5rem;
`
export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
`
export const DetailsContainer = styled.div``
