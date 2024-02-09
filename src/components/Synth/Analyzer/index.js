/* globals requestAnimationFrame */

import { WaveformContainer } from './styles'

export function waveformRender (analyzer, context, ref) {
  if (!ref.current) return
  const WaveformCTX = ref.current.getContext('2d')
  const containerWidth = ref.current.clientWidth // Get the width of the container
  const containerHeight = ref.current.clientHeight // Get the height of the container
  context.connect(analyzer)

  function drawWaveform () {
    const waveArray = analyzer.getValue()
    requestAnimationFrame(drawWaveform)
    WaveformCTX.lineWidth = 2.75
    WaveformCTX.strokeStyle = '#32CD32'
    WaveformCTX.clearRect(0, 0, containerWidth, containerHeight) // Clear canvas based on container dimensions
    WaveformCTX.beginPath()

    // Normalize waveform values to fit within the canvas height
    const normalize = value =>
      (value * containerHeight) / 2 + containerHeight / 2

    const sliceWidth = (containerWidth * 1.0) / (waveArray.length - 1)
    let x = 0

    for (let i = 0; i < waveArray.length; i++) {
      const y = normalize(waveArray[i])

      if (i === 0) {
        WaveformCTX.moveTo(x, y)
      } else {
        WaveformCTX.lineTo(x, y)
      }

      x += sliceWidth
    }

    WaveformCTX.stroke()
  }

  drawWaveform()
}
export function Analyzer ({ waveform }) {
  return (
    <WaveformContainer>
      <canvas
        style={{ overflow: 'auto' }}
        ref={waveform}
        width={waveform?.current?.parentNode?.clientWidth ?? 300}
        height={waveform?.current?.parentNode?.clientHeight ?? 150}
      />
    </WaveformContainer>
  )
}
