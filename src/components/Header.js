import { Box, Flex, Text } from '@chakra-ui/react';

import { ReactComponent as MenuIcon } from '../assets/school.svg';

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
    </Flex>
  );
}

export default Header;
