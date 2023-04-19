import { Box, Button, Flex, Highlight, Text } from '@chakra-ui/react';
import MainSlideUp from './MainSlideUp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Main() {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      navigate('/teach');
    }, 1500);
  };
  return (
    <>
      <Text
        display={'inline'}
        my={'5'}
        fontSize={'5xl'}
        color={'white'}
        fontFamily={'azo-sans-web, sans-serif'}
        fontWeight={'extrabold'}
      >
        <Highlight
          query={['Chat-Teacher', 'Assistant']}
          styles={{
            px: '3',
            py: '1',
            bg: 'red.100',
            rounded: '10px',
          }}
        >
          Chat-Teacher Is an Excellent Assistant Teacher Who Can Help You with
          Your
        </Highlight>
        <Box>
          <MainSlideUp />
        </Box>
      </Text>
      <Flex justifyContent={'center'}>
        <Button
          justifyContent={'center'}
          w={'100px'}
          h={'100px'}
          alignContent={'center'}
          _hover={'none'}
          sx={{
            transform: isClicked ? 'scale(100)' : 'scale(1)',
            bgColor: 'black',
            rounded: 'full',
          }}
          transition={'all 1.5s'}
          onClick={handleClick}
        >
          <Text
            sx={{
              visibility: isClicked ? 'hidden' : 'visible',
            }}
            textAlign={'center'}
            color={'white'}
          >
            Start!
          </Text>
        </Button>
      </Flex>
    </>
  );
}

export default Main;
