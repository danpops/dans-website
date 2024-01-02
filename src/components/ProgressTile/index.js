import { useCallback, useEffect, useRef, useState } from 'react'
import { ProgressBar, Tile, Wrapper } from './styles'

export default function ProgressTile ({ value }) {
  const tilesWrapperRef = useRef(null)
  const [tiles, setTiles] = useState([])

  const updateTilesNumber = useCallback(() => {
    if (!tilesWrapperRef.current || value === undefined) {
      return
    }
    const progressWidth = tilesWrapperRef.current.getBoundingClientRect().width
    const minWidth = 17
    const tileWidth = (value / 100) * progressWidth
    const newTilesNumber = Math.floor(tileWidth / minWidth)
    setTiles(Array.from({ length: newTilesNumber }))
  }, [value])

  useEffect(() => {
    updateTilesNumber()
    window.addEventListener('resize', updateTilesNumber)
    return () => window.removeEventListener('resize', updateTilesNumber)
  }, [updateTilesNumber])

  return (
    <Wrapper id='progress-tile-bar'>
      <ProgressBar ref={tilesWrapperRef}>
        {tiles.map((_, index) => (
          <Tile key={index} />
        ))}
      </ProgressBar>
    </Wrapper>
  )
}
