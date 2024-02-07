import { useState, useEffect } from 'react'

export default function useTypewriter (contentArray) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(0)

  const isFinalIndexes =
    index === contentArray.length - 1 && subIndex === contentArray[index].length
  const wordIsTyped =
    subIndex === contentArray[index].length + 1 &&
    index !== contentArray.length - 1 &&
    !reverse
  const isNewWord = subIndex === 0 && reverse
  const finalWordIsErased = index === contentArray.length - 1 && subIndex === 0
  const isFinalLetterInWord = subIndex === contentArray[index].length
  const timeOutTimer = Math.max(
    reverse ? 75 : isFinalLetterInWord ? 1000 : 150,
    Math.floor(Math.random() * 350)
  )

  useEffect(() => {
    if (isFinalIndexes) {
      return
    }

    if (wordIsTyped) {
      setReverse(true)
      return
    }

    if (isNewWord) {
      setReverse(false)
      setIndex(prev => prev + 1)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex(prev => prev + (reverse ? -1 : 1))
    }, timeOutTimer)

    return () => clearTimeout(timeout)
  }, [
    subIndex,
    index,
    reverse,
    isFinalIndexes,
    wordIsTyped,
    isNewWord,
    timeOutTimer,
    finalWordIsErased,
    contentArray
  ])

  return `${contentArray[index].substring(0, subIndex)}`
}
