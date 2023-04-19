import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import VideoBackground from './components/VideoBackground';
import VideoOverlay from './components/VideoOverlay';
import Header from './components/Header';
import theme from './theme';
import '@fontsource/poppins';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VideoBackground videoSrc={'/assets/study.mp4'} />
      <VideoOverlay />
      <Box zIndex={1}>
        <Header />
        <Main />
      </Box>
    </ChakraProvider>
  );
}

export default App;
