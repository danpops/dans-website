import {
  ChevronLeft,
  ChevronRight,
  PageButton,
  PageButtonContainer,
  PaginationContainer
} from './styles'

export default function Pagination ({ onChange, currentPage, pages, pageList }) {
  const hasNext = Number(currentPage) !== pages
  const hasPrevious = currentPage !== 1

  const onClickPrev = () => onChange(currentPage - 1)
  const onClickNext = () => onChange(currentPage + 1)
  const onClickPage = page => () => onChange(page)

  return (
    <PaginationContainer id='pagination'>
      {hasPrevious && <PaginationButton onClick={onClickPrev} type='prev' />}
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
      {hasNext && <PaginationButton onClick={onClickNext} type='next' />}
    </PaginationContainer>
  )
}
function PaginationButton ({ onClick, type }) {
  return (
    <PageButton onClick={onClick}>
      {type === 'prev' ? <ChevronLeft /> : <ChevronRight />}
    </PageButton>
  )
}
