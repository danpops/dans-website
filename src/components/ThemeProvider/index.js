import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '@/lib/colors'
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export default function ThemeProvider ({ children }) {
  const [themeMode, setThemeMode] = useState('light')
  const onChangeTheme = prevMode => (prevMode === 'light' ? 'dark' : 'light')
  const toggleTheme = () => setThemeMode(onChangeTheme)
  const theme = themeMode === 'dark' ? darkTheme : lightTheme
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
