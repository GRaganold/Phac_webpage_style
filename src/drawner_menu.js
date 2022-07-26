import React from 'react'
import {  Drawer,  DrawerBody,  DrawerFooter,  DrawerHeader,  DrawerOverlay,  DrawerContent,  DrawerCloseButton,  useDisclosure,  Button,  Input, useBoolean, Flex, Heading, Text, Radio, RadioGroup, ChakraProvider, Box, Divider } from '@chakra-ui/react'
import {   Accordion,  AccordionItem,  AccordionButton,  AccordionPanel,  AccordionIcon,} from '@chakra-ui/react'
import { HamburgerIcon  } from '@chakra-ui/icons'



function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (

    <ChakraProvider>
      <br></br>
      <Box w="100%" h="5px" bg="blue"> </Box>
      <>
        <Button ref={btnRef} variantColor="teal" onClick={onOpen} left="5%" bg="blue.500" color="white" p={1}>
          MENU <HamburgerIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu </DrawerHeader>

            <DrawerBody>
              <Box w="100%"  bg="grey" _hover={{bg:"black", color:"white"}}> item</Box>

              <Box>item</Box>
              
        <br></br>      
<Divider />
<Box>


  
</Box>


            </DrawerBody>

            
          </DrawerContent>
        </Drawer>
      </>
      <Box w="100%" h="5px" bg="blue"> </Box>
    </ChakraProvider>
  );
}

export default DrawerExample;