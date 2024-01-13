import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { createContext, useContext } from 'react'

const ThemeContext = createContext()

export default function ThemeProvider (props) {
  const { theme, themeMode, toggleTheme, isDarkMode, children } = props
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme, isDarkMode }}>
      <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
