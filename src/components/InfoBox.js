import React from "react";
import {
  Box,
  Image,
  Badge,
  Text,
  Stack,
  useColorMode,
  Button,
  Flex,
  Spacer,
  Container,
  Center
} from "@chakra-ui/react";
import EF_Mindfulness from "../images/svg/efMi.svg";

function App() {
  // Hook to toggle dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="app">
      <Center>
        <Image src={EF_Mindfulness} alt="Card Image" boxSize="300px"></Image>
      </Center>
      <Container>HEllow moose man I am here ready to ppoooooo</Container>
      <Button onClick={toggleColorMode} mt={5}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <Box
        w="300px"
        rounded="20px"
        overflow="hidden"
        bg={colorMode === "dark" ? "gray.700" : "gray.200"}
        mt={10}
      >
        <Image src={EF_Mindfulness} alt="Card Image" boxSize="300px"></Image>
        <Box p={5}>
          <Stack align="center">
            <Badge variant="solid" colorScheme="green" rounded="full" px={2}>
              GeeksForGeeks
            </Badge>
          </Stack>
          <Stack align="center">
            <Text as="h2" fontWeight="normal" my={2}>
              A Computer Science Portal for Geeks
            </Text>
            <Text fontWeight="light">
              A platform for students to study CSE concepts.
            </Text>
          </Stack>
          <Flex>
            <Spacer />
            <Button variant="solid" colorScheme="green" size="sm">
              Learn More
            </Button>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default App;
