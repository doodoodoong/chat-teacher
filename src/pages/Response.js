import { Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Header from '../components/Header';

function Response() {
  const location = useLocation();
  const response = location.state.response;
  return (
    <Box h={'100vh'} w={'100vw'} bgColor={'black'}>
      <Header />
      <TypeAnimation
        sequence={[`${response}`, 4000]}
        cursor={true}
        style={{
          fontSize: '3em',
          fontFamily: 'NeoDunggeunmoPro-Regular',
          color: 'white',
        }}
      />
    </Box>
  );
}

export default Response;
