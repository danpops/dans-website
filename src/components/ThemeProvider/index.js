import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { createContext, useContext } from 'react'
import useThemeProvider from '@/hooks/useThemeProvider'

const ThemeContext = createContext()

export default function ThemeProvider ({ children }) {
  const { theme, themeMode, toggleTheme } = useThemeProvider()

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
