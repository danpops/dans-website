import { useEffect, useState } from 'react'

export const THREE_SECONDS = 3000
export default function useProgress ({ loading }) {
  const [progressVisible, setProgressVisible] = useState(false)
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    let animation
    let startTime

    const animateProgress = currentTime => {
      if (!startTime) startTime = currentTime
      const elapsedTime = currentTime - startTime
      setProgressVisible(true)

      if (elapsedTime < THREE_SECONDS) {
        const progress = (elapsedTime / THREE_SECONDS) * 100
        setProgressValue(progress)
        animation = setTimeout(() => animateProgress(performance.now()), 16)
      } else {
        setProgressValue(100)
      }
    }
    if (loading) {
      animateProgress(performance.now())
    }
    return () => {
      clearTimeout(animation)
      setProgressVisible(false)
    }
  }, [loading])

  return { progressVisible, progressValue }
}
