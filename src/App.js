import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import '@fontsource/poppins';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Teach from './pages/Teach';
import Fonts from './Fonts';
import Loading from './pages/Loading';
import Response from './pages/Response';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teach" element={<Teach />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
