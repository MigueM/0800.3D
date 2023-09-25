import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../app/utils/theme';
import PropTypes from 'prop-types';
import Nav from '../app/components/nav/Navbar';
import { Rubik } from 'next/font/google';
import localFont from 'next/font/local'
 
const kredit = localFont({
  src: '../public/fonts/kredit.otf',
  display: 'swap',
})

const rubik = Rubik({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-kredit: ${kredit.style.fontFamily};
            --font-rubik: ${rubik.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={'dark'} />
        <Nav/>
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
