import { ThemeProvider } from 'styled-components'
import { LoginPage } from './components/LoginPage'
import { GlobalStyle } from './styles/Global'
import { DefaultTheme } from './styles/themes/Default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <LoginPage />
    </ThemeProvider>
  )
}
