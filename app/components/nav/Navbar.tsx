'use client';

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={3}
      py={2}
      rounded={'lg'}
      _hover={{
        textDecoration: 'none',
        bg: 'orange.700',
      }}
      color='gray.700'
      bg= 'orange.400'
      href={'#'}>
      {children}
    </Box>
  );
};

export default function Nav() {
  return (
    <Box bg={'gray.700'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-evenly'}>
        <Heading color='gray.800'>08003D</Heading>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <NavLink>Catalogo</NavLink>
          </Stack>
        </Flex>

      </Flex>
    </Box>
  );
}
