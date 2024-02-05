/* globals describe, expect, it */

const { act, renderHook } = require('@testing-library/react')
const { default: useThemeProvider } = require('@/hooks/useThemeProvider')
const { lightTheme, darkTheme } = require('@/lib/theme')

describe('useThemeProvider tests', () => {
  it('should have light mode on initial state', () => {
    const { result } = renderHook(() => useThemeProvider())

    expect(result.current.themeMode).toBe('light')
    expect(result.current.theme).toBe(lightTheme)
    expect(result.current.isDarkMode).toBeFalsy()
  })
  it('should update theme using toggleTheme', async () => {
    const { result, rerender } = renderHook(() => useThemeProvider())

    // toggle theme to dark mode
    act(() => result.current.toggleTheme())
    await rerender()

    expect(result.current.themeMode).toBe('dark')
    expect(result.current.theme).toBe(darkTheme)
    expect(result.current.isDarkMode).toBeTruthy()

    // toggle theme to light mode
    act(() => result.current.toggleTheme())
    await rerender()

    expect(result.current.themeMode).toBe('light')
    expect(result.current.theme).toBe(lightTheme)
    expect(result.current.isDarkMode).toBeFalsy()
  })
})
