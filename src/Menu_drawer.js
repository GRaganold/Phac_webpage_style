import { useColorMode, Switch, Flex, Button, IconButton, ChakraProvider, Box, Spacer, Divider, Link, SlideFade, Collapse } from "@chakra-ui/react";
import { useState,isOpen, onToggle, } from "react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, SunIcon, MoonIcon } from '@chakra-ui/icons'
import {  useDisclosure, Popover,  PopoverTrigger,  PopoverContent,  PopoverHeader,  PopoverBody,  PopoverFooter,  PopoverArrow,  PopoverCloseButton,
  PopoverAnchor, Portal} from '@chakra-ui/react'
import { Fade, Menu,    MenuButton,    MenuList,    MenuItem,    MenuItemOption,    MenuGroup,    MenuOptionGroup,    MenuDivider,  } from '@chakra-ui/react'
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Text } from '@chakra-ui/react'

const Testing = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')
  const { isOpen, onToggle } = useDisclosure()

  return (
    <ChakraProvider>
    <Flex>
      <Flex
        pos="fixed"
        justify="center"
        align="center"
        w="100vw"
        bg="#335075">
          <Box
          bg="aqua"
          h='5px'
          > 
          <Divider />
          </Box>
        <Flex
          display=
          {['none', 'none', 'flex', 'flex']}
          gap={3}
                    
        >
          <Box></Box>
     <Menu >
              <MenuButton bg="#335075" borderColor="white" 
                fontSize="20px" color="white" 
                _hover={{ bg: "#444444", color: "white" }}  >
                <Box gap={2}>
                  <Text> Jobs<ChevronDownIcon /> </Text>
                  </Box>
                </MenuButton>
              <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                fontSize="20px" color="white"
                _hover={{ bg: "#edf2f7", color: "black" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"
                
                  _hover={{ bg: "#335075", color: "white" }}>
                 <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>

              </MenuList>

            </Menu>
            
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white" fontFamily='["Times New Roman", "Times", "serif"]'
                _hover={{ bg: "#444444", color: "white" }}>
                <Text>Immigration  <ChevronDownIcon />  </Text>

                </MenuButton>
              <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                fontSize="20px" color="white"
                _hover={{ bg: "#edf2f7", color: "black" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"
                
                  _hover={{ bg: "#335075", color: "white" }}>
                 <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>

              </MenuList>

            </Menu>
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
               <Text> Travel  <ChevronDownIcon />  </Text>

                </MenuButton>
              <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                fontSize="20px" color="white"
                _hover={{ bg: "#edf2f7", color: "black" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"
                
                  _hover={{ bg: "#335075", color: "white" }}>
                 <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>

              </MenuList>

            </Menu>
            
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"fontFamily='["Times New Roman", "Times", "serif"]'
                _hover={{ bg: "#444444", color: "white" }}>
                <Text>  Business  <ChevronDownIcon />  </Text>

                </MenuButton>
              <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                fontSize="20px" color="white"
                _hover={{ bg: "#edf2f7", color: "black" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"
                
                  _hover={{ bg: "#335075", color: "white" }}>
                 <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>

              </MenuList>

            </Menu>


            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white" fontFamily='["Times New Roman", "Times", "serif"]'
                _hover={{ bg: "#444444", color: "white" }}>
                <Text>Benefits <ChevronDownIcon />  </Text>

                </MenuButton>
              <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                fontSize="20px" color="white"
                _hover={{ bg: "#edf2f7", color: "black" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"
                
                  _hover={{ bg: "#335075", color: "white" }}>
                 <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>

              </MenuList>

            </Menu>
            
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
                <Text>  Health  <ChevronDownIcon />  </Text>

                </MenuButton>
              <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                fontSize="20px" color="white"
                _hover={{ bg: "#edf2f7", color: "black" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"
                
                  _hover={{ bg: "#335075", color: "white" }}>
                 <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>

              </MenuList>

            </Menu>
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="24px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
               <Text>   Taxes  <ChevronDownIcon />  </Text>  

                </MenuButton>
              <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                fontSize="20px" color="white"
                _hover={{ bg: "#edf2f7", color: "black" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"
                
                  _hover={{ bg: "#335075", color: "white" }}>
                 <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>

              </MenuList>

            </Menu>
            
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
                <Text >  More Services  <ChevronDownIcon />  </Text>  

              </MenuButton>
              <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                fontSize="20px" color="white"
                _hover={{ bg: "#edf2f7", color: "black" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"
                
                  _hover={{ bg: "#335075", color: "white" }}>
                 <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>
                <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                  _hover={{ bg: "#335075", color: "white" }}>
                  <Link href='#'>Link 1  </Link>  </MenuItem>

              </MenuList>

            </Menu>
            <Box>        
        </Box>
        </Flex>

            
        
      </Flex>
      
    </Flex>


    <Flex 
           
      display={['flex', 'flex', 'none', 'none']} >
    
   <Box bg='#335075' flex='1' align='center'>
      <Button onClick={onToggle}
      bg='#335075' color="white"
      flex='1'
      w='100vW'
      _hover={{bg:"#444444", color: "white" }}
      >Menu </Button>
      
      <Collapse in={isOpen} animateOpacity  >
       
          
          <Accordion defaultIndex={[0]} allowMultiple gap={3} boxShadow=" 2px 2px #888888" bg='white' borderColor="#888888">
  <AccordionItem  >
    <h2>
      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"                 
               _hover={{ bg:"#444444", color: "white" }} >
        <Box flex='1' textAlign='left' >
          Jobs
        </Box>
        <Box><Spacer /></Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
        <Text><Link href='#'>Link 1  </Link></Text>
        <Text><Link href='#'>Link 2  </Link></Text>
        <Text><Link href='#'>Link 3  </Link></Text>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  >
    <h2>
      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"                 
               _hover={{ bg:"#444444", color: "white" }} >
        <Box flex='1' textAlign='left' >
          Immigration
        </Box>
        <Box><Spacer /></Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
        <Text><Link href='#'>Link 1  </Link></Text>
        <Text><Link href='#'>Link 2  </Link></Text>
        <Text><Link href='#'>Link 3  </Link></Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem  >
    <h2>
      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"                 
               _hover={{ bg:"#444444", color: "white" }} >
        <Box flex='1' textAlign='left' >
          Travel
        </Box>
        <Box><Spacer /></Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
        <Text><Link href='#'>Link 1  </Link></Text>
        <Text><Link href='#'>Link 2  </Link></Text>
        <Text><Link href='#'>Link 3  </Link></Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem  >
    <h2>
      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"                 
               _hover={{ bg:"#444444", color: "white" }} >
        <Box flex='1' textAlign='left' >
          Business
        </Box>
        <Box><Spacer /></Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
        <Text><Link href='#'>Link 1  </Link></Text>
        <Text><Link href='#'>Link 2  </Link></Text>
        <Text><Link href='#'>Link 3  </Link></Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem  >
    <h2>
      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"                 
               _hover={{ bg:"#444444", color: "white" }} >
        <Box flex='1' textAlign='left' >
          Benefits
        </Box>
        <Box><Spacer /></Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
        <Text><Link href='#'>Link 1  </Link></Text>
        <Text><Link href='#'>Link 2  </Link></Text>
        <Text><Link href='#'>Link 3  </Link></Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem  >
    <h2>
      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"                 
               _hover={{ bg:"#444444", color: "white" }} >
        <Box flex='1' textAlign='left' >
          Health
        </Box>
        <Box><Spacer /></Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
        <Text><Link href='#'>Link 1  </Link></Text>
        <Text><Link href='#'>Link 2  </Link></Text>
        <Text><Link href='#'>Link 3  </Link></Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem  >
    <h2>
      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"                 
               _hover={{ bg:"#444444", color: "white" }} >
        <Box flex='1' textAlign='left' >
          Taxes
        </Box>
        <Box><Spacer /></Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px"  textAlign='left'>
        <Text><Link href='#'>Link 1  </Link></Text>
        <Text><Link href='#'>Link 2  </Link></Text>
        <Text><Link href='#'>Link 3  </Link></Text>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem  >
    <h2>
      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"                 
               _hover={{ bg:"#444444", color: "white" }} >
        <Box flex='1' textAlign='left' >
          More Services
        </Box>
        <Box><Spacer /></Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" textAlign='left' >
        <Text><Link href='#'>Link 1  </Link></Text>
        <Text><Link href='#'>Link 2  </Link></Text>
        <Text><Link href='#'>Link 3  </Link></Text>
    </AccordionPanel>
  </AccordionItem>

</Accordion>
       
       
      </Collapse>
      </Box>
    </Flex>
    </ChakraProvider>
  )
}

export default Testing