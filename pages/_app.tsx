import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../app/theme';
import { Rubik } from 'next/font/google';
const rubik = Rubik({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${rubik.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={'dark'} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
