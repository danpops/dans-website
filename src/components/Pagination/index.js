import { BodyText } from '@/components/Text'
import { PageOption, PageSelect, PaginationContainer } from './styles'

export default function Pagination ({ onChange, currentPage, pages }) {
  return (
    <PaginationContainer>
      <BodyText>Page:</BodyText>
      <PageSelect onChange={onChange} value={currentPage}>
        {Array.from({ length: pages }, (_, index) => index + 1).map(
          (item, index) => (
            <PageOption key={index} value={item}>
              {item}
            </PageOption>
          )
        )}
      </PageSelect>
    </PaginationContainer>
  )
}
