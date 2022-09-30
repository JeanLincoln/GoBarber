import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/Global'
import { DefaultTheme } from './styles/themes/Default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}
