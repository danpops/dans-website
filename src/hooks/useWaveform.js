/* globals ResizeObserver */

import { waveformRender } from '@/components/Synth/Analyzer'
import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'

const Tone = dynamic(() => import('tone').then(mod => mod), { ssr: false })

export default function useWaveform () {
  const Waveform = useRef(null)
  const waveformAnalyzer = new Tone.Analyser('waveform', 2048)
  useEffect(() => {
    waveformRender(waveformAnalyzer, Tone.Destination, Waveform)
    const resizeObserver = new ResizeObserver(entries => {
      const containerWidth = entries[0].contentRect.width
      Waveform.current.width = containerWidth
      waveformRender(waveformAnalyzer, Tone.Destination, Waveform)
    })
    resizeObserver.observe(Waveform.current.parentNode)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return { Waveform }
}
