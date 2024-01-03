import { BodyText } from '@/components/Text'
import {
  ChevronLeft,
  ChevronRight,
  PageButton,
  PaginationContainer
} from './styles'

export default function Pagination ({ onChange, currentPage, pages }) {
  const isNextDisabled = Number(currentPage) === pages
  const isPreviousDisabled = currentPage === 1

  const onClickPrev = () => onChange('previous')
  const onClickNext = () => onChange()
  return (
    <PaginationContainer id='pagination'>
      <PageButton disabled={isPreviousDisabled} onClick={onClickPrev}>
        <ChevronLeft />
      </PageButton>
      <BodyText>Page: {currentPage}</BodyText>
      <PageButton disabled={isNextDisabled} onClick={onClickNext}>
        <ChevronRight />
      </PageButton>
    </PaginationContainer>
  )
}
