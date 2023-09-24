
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const fonts = {
  heading: 'var(--font-rubik)',
  body: 'var(--font-rubik)',
}

const theme = extendTheme({ config, fonts })

export default theme