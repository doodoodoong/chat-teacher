import { Box, Flex, Spinner } from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';

function Loading() {
  return (
    <Box
      display={'flex'}
      bgColor={'black'}
      w={'100vw'}
      h={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Spinner size={'xl'} color={'white'} />
      <Flex justifyContent={'center'} alignItems={'center'}>
        <TypeAnimation
          sequence={[
            '문제를 읽는중...',
            1000,
            '조건을 살펴보는 중...',
            1000,
            '답을 구하는 중...',
            1000,
            '검산하는 중...',
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          cursor={true}
          style={{
            marginLeft: '5px',
            whiteSpace: 'pre-line',
            fontSize: '2em',
            display: 'inline',
            fontFamily: 'NeoDunggeunmoPro-Regular',
            color: 'white',
          }}
        />
      </Flex>
    </Box>
  );
}

export default Loading;
