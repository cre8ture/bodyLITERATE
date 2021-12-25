import React from 'react';
import Drawer from "./drawer"
import {
  SimpleGrid,
  Box
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import styles from "./header.module.css"

function Header() {
    // need to use an if statement to CHANGE the classname of Drawer to top men and then add a top menu, depending on size
    return (
      <>
      <div className={styles.drawer}>
       {/* <SimpleGrid  columns={2} spacing={10}></SimpleGrid> */}
       <Box height='80px'>
          
        <Drawer/>
        <ColorModeSwitcher justifySelf="flex-end" />
       </Box>
       </div>
      </>

    )
  }

  export default Header