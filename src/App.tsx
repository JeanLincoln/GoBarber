import { ThemeProvider } from 'styled-components'
import { Schedules } from './components/Schedules'
import { GlobalStyle } from './styles/Global'
import { DefaultTheme } from './styles/themes/Default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Schedules />
    </ThemeProvider>
  )
}
