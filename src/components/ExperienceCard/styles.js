import Image from 'next/image'
import styled from 'styled-components'

export const CardContainer = styled.div``
export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 2rem;
`
export const CompanyImage = styled(Image)``
export const TitleContainer = styled.div``
export const DetailsContainer = styled.div``
