/* globals jest, describe, expect, it */

const { act, renderHook } = require('@testing-library/react')
const { default: useProgress } = require('@/hooks/useProgress')

jest.useFakeTimers()

describe('useProgress tests', () => {
  it('should have progressVisible false when loading false', () => {
    const actual = renderHook(() => useProgress({ loading: false }))
    const expected = { progressValue: 0, progressVisible: false }
    expect(actual.result.current).toStrictEqual(expected)
  })
  it('should have default values when loading true', () => {
    const actual = renderHook(() => useProgress({ loading: true }))
    const expected = { progressValue: 0, progressVisible: true }
    expect(actual.result.current).toStrictEqual(expected)
  })
  it('should have 100 progressValue after 4 seconds', async () => {
    const { result, rerender } = renderHook(() =>
      useProgress({ loading: true })
    )
    expect(result.current.progressValue).toBe(0)
    act(() => {
      jest.advanceTimersByTime(4000)
    })
    await rerender()
    expect(result.current.progressValue).toBe(100)
  })
})
