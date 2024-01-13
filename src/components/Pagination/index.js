import {
  ChevronLeft,
  ChevronRight,
  PageButton,
  PageButtonContainer,
  PaginationContainer
} from './styles'

export default function Pagination ({ onChange, currentPage, pages, pageList }) {
  const isNextDisabled = Number(currentPage) === pages
  const isPreviousDisabled = currentPage === 1

  const onClickPrev = () => onChange(currentPage - 1)
  const onClickNext = () => onChange(currentPage + 1)
  const onClickPage = page => () => onChange(page)

  return (
    <PaginationContainer id='pagination'>
      <PageButton disabled={isPreviousDisabled} onClick={onClickPrev}>
        <ChevronLeft />
      </PageButton>
      <PageButtonContainer>
        {pageList.map(item => (
          <PageButton
            key={item}
            $active={currentPage === item}
            onClick={onClickPage(item)}
          >
            {item}
          </PageButton>
        ))}
      </PageButtonContainer>
      <PageButton disabled={isNextDisabled} onClick={onClickNext}>
        <ChevronRight />
      </PageButton>
    </PaginationContainer>
  )
}
