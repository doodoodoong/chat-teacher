import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

import { ReactComponent as MenuIcon } from '../assets/school.svg';
import About from './About';

function Header() {
  return (
    <Flex>
      <Box m={'5'}>
        <MenuIcon fill="white" />
      </Box>
      <Flex alignItems={'center'}>
        <Text color={'white'} textAlign={'center'} fontSize={'3xl'}>
          Chat-Teacher
        </Text>
      </Flex>
      <Spacer />
      <Box m={'5'}>
        <About />
      </Box>
    </Flex>
  );
}

export default Header;
