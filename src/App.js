import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import '@fontsource/poppins';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teach from './pages/Teach';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teach" element={<Teach />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
