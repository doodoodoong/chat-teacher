import { Box } from '@chakra-ui/react';
import Chat from '../components/Chat';

function Teach() {
  return (
    <>
      <Box w={'100vw'} h={'100vh'} bgColor={'black'} position={'relative'}>
        <Chat />
      </Box>
    </>
  );
}

export default Teach;
