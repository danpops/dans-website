import styled from 'styled-components'
import { fonts } from '@/design/fonts'

export const PaginationContainer = styled.div`
  display: grid;
  padding: 0.5rem;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: center;
  column-gap: 1rem;
`
export const PageSelect = styled.select`
  font-size: ${fonts.md};
  width: 5rem;
`
export const PageOption = styled.option``
