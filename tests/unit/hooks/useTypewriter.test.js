/* globals jest, describe, expect, it */

const { act, renderHook } = require('@testing-library/react')
const { default: useTypewriter } = require('@/hooks/useTypewriter')

jest.useFakeTimers()

describe('useTypewriter tests', () => {
  it('should have initial empty text value', () => {
    const actual = renderHook(() => useTypewriter(['dan', 'test']))
    const expected = ''
    expect(actual.result.current).toStrictEqual(expected)
  })
  it('should add new character for each text value after .5 seconds', async () => {
    const { result } = renderHook(() => useTypewriter(['dan', 'test']))
    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('d')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('da')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('dan')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('dan')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('dan')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('dan')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('da')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('d')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('t')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('te')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('tes')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('test')

    act(() => jest.advanceTimersByTime(500))
    expect(result.current).toStrictEqual('test')
  })
})
