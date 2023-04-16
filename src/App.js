import React from 'react';
import { ChakraProvider, theme, Heading } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Heading>Chat-teacher</Heading>
    </ChakraProvider>
  );
}

export default App;
