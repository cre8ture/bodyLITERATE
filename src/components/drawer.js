import React from "react"
// import ReactDom from "react-dom"
import {
  Stack,
  CloseButton
} from '@chakra-ui/react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import MenuList from './menuList'


function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/executive_functions_coaching",
      text: "Executive Functions Coaching",
    },
    {
      id: 3,
      path: "/somatic_mindfulness_practices",
      text: "Somatics and Minfulness",
    },
    {
      id: 4,
      path: "/our_team",
      text: "Our Team",
    },
    {
    id: 5,
    path: "/setting_up_meetings",
    text: "Setting up meetings",
  },
  ]

  return (
    <>


      <IconButton ref={btnRef} aria-label='Open menu' icon={<HamburgerIcon 
      size="lg"
        fontSize="lg" 
        w={12} 
        h={12}
        // background="white"
        border="none"

        />} onClick={onOpen} />

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
  
          <Stack direction='row' spacing={6}>
            <CloseButton size='lg' onClick={onClose} />
          </Stack>

          <DrawerBody>
          
            <MenuList/>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerExample