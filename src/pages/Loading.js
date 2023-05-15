import { Box, Spinner } from '@chakra-ui/react';
import LoadingMessage from '../components/LoadingMessage';

function Loading() {
  return (
    <>
      <Box display={'flex'} bgColor={'black'} w={'100vw'} h={'100vh'}>
        <Spinner size={'xl'} color={'white'} />
        <LoadingMessage />
      </Box>
    </>
  );
}

export default Loading;
