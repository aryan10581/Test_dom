import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Nav from './Nav';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
<Routes>

<Route path='/' element={<Nav/>}/>
    <Route path='/home' element={<Home/>}/>
        
       
</Routes>  
  );
}

export default App;
