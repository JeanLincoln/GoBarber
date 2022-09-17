/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import { DefaultTheme } from '../styles/themes/Default'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
