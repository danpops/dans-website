import { getWindowLayout } from '@/components/Layout'
import Synth from '@/components/Synth'
import useSynthNote from '@/hooks/useSynthNote'

export function getStaticProps () {
  const id = 'synth'
  const title = 'Modular Synth'
  const props = { id, title, homer: false, marquee: false, copyright: false }
  return { props }
}
export default function ModularSynthPage () {
  const synth = useSynthNote()
  return <Synth {...synth} />
}

ModularSynthPage.getLayout = getWindowLayout
