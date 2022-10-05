import { ThemeProvider } from 'styled-components'
import { ScheduleList } from './components/ScheduleList'
import { GlobalStyle } from './styles/Global'
import { DefaultTheme } from './styles/themes/Default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <ScheduleList />
      {/* <Login /> */}
      {/* <Schedule /> */}
      {/* <SignUp /> */}
    </ThemeProvider>
  )
}
