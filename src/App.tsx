import { ThemeProvider } from 'styled-components'
import { Login } from './components/Login'
import { GlobalStyle } from './styles/Global'
import { DefaultTheme } from './styles/themes/Default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Login />
    </ThemeProvider>
  )
}
