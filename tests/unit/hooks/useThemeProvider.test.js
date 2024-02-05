/* globals jest, describe, expect, it */

const { act, renderHook } = require('@testing-library/react')
const { default: useThemeProvider } = require('@/hooks/useThemeProvider')
const { lightTheme, darkTheme } = require('@/lib/theme')

jest.useFakeTimers()

describe('useThemeProvider tests', () => {
  it('should update theme using toggleTheme', async () => {
    const { result, rerender } = renderHook(() => useThemeProvider())
    expect(result.current.themeMode).toBe('light')
    expect(result.current.theme).toBe(lightTheme)
    act(() => result.current.toggleTheme())
    await rerender()
    expect(result.current.themeMode).toBe('dark')
    expect(result.current.theme).toBe(darkTheme)
  })
})
