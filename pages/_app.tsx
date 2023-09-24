import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../app/theme';
import { Rubik } from 'next/font/google';
const rubik = Rubik({ subsets: ['latin'] });
import PropTypes from 'prop-types';

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

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
