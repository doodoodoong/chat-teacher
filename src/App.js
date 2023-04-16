import React from 'react';
import { ChakraProvider, Heading, Text, theme } from '@chakra-ui/react';
import VideoBackground from './components/VideoBackground';
import VideoOverlay from './components/VideoOverlay';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VideoBackground videoSrc={'/assets/study.mp4'} />
      <VideoOverlay />
      <Text
        textAlign={'center'}
        color={'white'}
        fontWeight={'extrabold'}
        fontSize={'8xl'}
      >
        Chat-teacher Can Help Your Study About
      </Text>
    </ChakraProvider>
  );
}

export default App;
