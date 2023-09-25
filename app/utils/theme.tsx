
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

/* heading: 'var(--font-rubik)', */
const fonts = {
  heading: 'var(--font-kredit)',
  body: 'var(--font-rubik)',
}

const theme = extendTheme({ config, fonts })

export default theme