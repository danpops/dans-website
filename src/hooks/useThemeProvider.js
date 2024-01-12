/* global localStorage */
import { darkTheme, lightTheme } from '@/lib/colors'
import { useState } from 'react'

export default function useThemeProvider () {
  // Use state to manage theme mode, and set the initial theme based on localStorage or default to 'light'
  const [themeMode, setThemeMode] = useState(() => {
    // Check if localStorage is available (client-side) and get the stored theme mode
    const savedThemeMode =
      typeof window !== 'undefined' ? localStorage.getItem('themeMode') : null
    // Return the saved theme mode or default to 'light'
    return savedThemeMode || 'light'
  })

  const onChangeTheme = prevMode => (prevMode === 'light' ? 'dark' : 'light')

  const toggleTheme = () =>
    setThemeMode(prevMode => {
      const newMode = onChangeTheme(prevMode)
      // Save the new theme mode to local storage if it's available (client-side)
      if (typeof window !== 'undefined') {
        localStorage.setItem('themeMode', newMode)
      }
      return newMode
    })

  const theme = themeMode === 'dark' ? darkTheme : lightTheme

  return { theme, toggleTheme, themeMode }
}
