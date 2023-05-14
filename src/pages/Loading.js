import { Box, Flex, Spinner, Text } from '@chakra-ui/react';

function Loading() {
  return (
    <Box display={'flex'} bgColor={'black'} w={'100vw'} h={'100vh'}>
      <Flex marginLeft={'3px'} justifyContent={'center'} alignItems={'center'}>
        <Spinner size={'xl'} color={'white'} />
        <Text
          fontFamily={'mono'}
          fontSize={'2xl'}
          textAlign={'center'}
          color={'white'}
        >
          Thinking...
        </Text>
      </Flex>
    </Box>
  );
}

export default Loading;
