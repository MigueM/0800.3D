import React from 'react';

import {
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import LogoScene from '../app/components/Model';


const IndexPage = () => {

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" m={2}>
      <Flex direction="column" background='gray.700' p={12} rounded={25}>
        <LogoScene/>
        <Heading mb={6}>
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
