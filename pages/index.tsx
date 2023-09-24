import Image from 'next/image';
import styles from '../styles/styles.module.scss';

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';


const IndexPage = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700')

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background={formBackground} p={12} rounded={25}>
        <Heading mb={6}>
          08003D
          <Text color={'orange.400'}>Tu imaginación, nuestra inspiración</Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'} mb={6}>
          ¿Tenes una idea para un producto o prototipo? ¿Queres
          crear un modelo personalizado para un proyecto de arte o decoración?
          Con nuestros servicios de diseño e impresión 3D, puedes hacer realidad
          tus sueños. Ofrecemos una amplia gama de servicios, desde el diseño
          conceptual hasta la impresión final. Nuestros expertos en 3D tienen
          años de experiencia en el sector y pueden ayudarte a crear cualquier
          cosa que imagines. Nuestros precios son competitivos y ofrecemos un
          servicio de atención al cliente de primera clase. Contacta con
          nosotros hoy mismo y descubri cómo podemos ayudarte a dar vida a tus
          ideas.
        </Text>
      </Flex>
    </Flex>
  );
};
export default IndexPage
