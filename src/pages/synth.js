import { getWindowLayout } from '@/components/Layout'
// import Synth from '@/components/Synth'
import SynthV2 from '@/components/SynthV2'
// import useSynthNote from '@/hooks/useSynthNote'

export function getStaticProps () {
  const id = 'synth'
  const title = 'Modular Synth'
  const props = {
    id,
    title,
    showHomer: false,
    showMarquee: false,
    showCopyright: false
  }
  return { props }
}
export default function ModularSynthPage () {
  // const synth = useSynthNote()
  // return <Synth {...synth} />
  return <SynthV2 />
}

ModularSynthPage.getLayout = getWindowLayout
