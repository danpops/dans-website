import homerGif from '@/assets/gifs/homer.gif'
import { StickyImage, StickyWrapper } from './styles'
import { useRouter } from 'next/router'

export default function StickyGif () {
  const router = useRouter()
  const onClickRecords = () => router.push('/records')

  return (
    <StickyWrapper onClick={onClickRecords}>
      <StickyImage src={homerGif} alt='homer gif' priority />
    </StickyWrapper>
  )
}
