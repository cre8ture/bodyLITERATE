// import React from 'react';
// import Home from './pages/home'
// import Header from "./components/header"
// import ReactDOM from "react-dom";
// import {
//   ChakraProvider,
//   theme,
// } from '@chakra-ui/react';

// // function App() {
// //  return (
//   ReactDOM.render(
//   <ChakraProvider theme={theme}>
//   <Header />
//   <>
//  hello
// <Home />
// </>
// </ChakraProvider>,
// document.getElementById("root")
//  );

// export default App;

import React from "react";
import Header from "./components/header";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme
} from "@chakra-ui/react";
// import { ColorModeSwitcher } from '../ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box textAlign="left" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
