import { useRouter } from 'next/router'
import { PageTabsContainer, TabItem } from './styles'
import { pageLinks } from '@/assets/data/links'

export default function PageTabs () {
  const router = useRouter()
  const clickLink = link => () => router.push(link.toLowerCase())

  return (
    <PageTabsContainer id='page-tabs'>
      {pageLinks.map((item, index) => (
        <TabItem id='tab-item' key={index} onClick={clickLink(item)}>
          {item}
        </TabItem>
      ))}
    </PageTabsContainer>
  )
}
