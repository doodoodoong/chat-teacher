import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '../assets/school.svg';
import About from './About';

function Header() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/');
  };
  return (
    <Flex>
      <Box m={'5'}>
        <MenuIcon onClick={handleOnClick} fill="white" cursor={'pointer'} />
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
