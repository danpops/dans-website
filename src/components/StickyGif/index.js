import homerGif from 'public/gifs/homer.gif'
import { StickyImage, StickyWrapper } from './styles'
import { useRouter } from 'next/router'

export default function StickyGif () {
  const router = useRouter()
  const onClickRecords = () => router.push('/records')

  return (
    <StickyWrapper onClick={onClickRecords} id='sticky-gif'>
      <StickyImage src={homerGif} alt='homer gif' priority />
    </StickyWrapper>
  )
}
