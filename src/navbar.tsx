import { CloseIcon, HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { IconButton, Box, Flex, Menu, MenuButton, MenuList, MenuItem, useDisclosure, Stack, HStack, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Spacer, AccordionIcon, Collapse } from '@chakra-ui/react';
import { Outlet, Link } from "react-router-dom";



export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>


      <nav
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-around'} bg="#335075" >
          <IconButton
            size={'sm'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}

          />
          <HStack spacing={8} alignItems={'center'} >

            <HStack
              as={'nav'}
              spacing={2}
              display={{ base: 'none', md: 'flex' }}

              justify="space-around"
            >
              <Flex

                justify="center"
                align="center"
                w="100vw"
                bg="#335075"
                gap={2}
              >

                <Flex justify="space-evenly"
                  flex='1'
                >
                  <Box></Box><Box></Box><Box></Box><Box></Box>
                  <Box></Box><Box></Box><Box></Box><Box></Box>


                  <Menu >
                    <MenuButton bg="#335075" borderColor="white"
                      fontSize="20px" color="white" h='60px' fontFamily='["Times New Roman", "Times", "serif"]'
                      _hover={{ bg: "#444444", color: "white" }}  >

                      <Text> Jobs<ChevronDownIcon /> </Text>

                    </MenuButton>
                    <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                      fontSize="20px" color="white"
                      _hover={{ bg: "#edf2f7", color: "black" }}>

                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"_hover={{ bg: "#335075", color: "white" }}>

                        <Link to="/">Empty link 1</Link> </MenuItem>

                      <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"_hover={{ bg: "#335075", color: "white" }}>
                        <Link to="/jobsLink1">jobsLink1</Link></MenuItem>
                        <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"_hover={{ bg: "#335075", color: "white" }}>
                        <Link to="/jobsLink2">jobsLink2</Link></MenuItem>

                        <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"_hover={{ bg: "#335075", color: "white" }}>
                        <Link to="/jobsLink3">jobsLink3</Link></MenuItem>

                    </MenuList>
                  </Menu>

                  <Menu isLazy >
                    <MenuButton bg="#335075" borderColor="white"
                      fontSize="20px" color="white" h='60px' fontFamily='["Times New Roman", "Times", "serif"]'
                      _hover={{ bg: "#444444", color: "white" }}  >

                      <Text>Immigration  <ChevronDownIcon />  </Text>

                    </MenuButton>
                    <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                      fontSize="20px" color="white"
                      _hover={{ bg: "#edf2f7", color: "black" }}>

                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px" _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/immigrationlink1'>immigrationlink 1  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"_hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/immigrationlink2'>immigrationlink 2  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"_hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/immigrationlink3'>immigrationlink 3  </Link>  </MenuItem>

                    </MenuList>

                  </Menu>
                  <Menu isLazy >
                    <MenuButton bg="#335075" borderColor="white"fontSize="20px" color="white" h='60px' fontFamily='["Times New Roman", "Times", "serif"]' _hover={{ bg: "#444444", color: "white" }}  >
                      <Text> Travel  <ChevronDownIcon />  </Text>

                    </MenuButton>
                    <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                      fontSize="20px" color="white"
                      _hover={{ bg: "#edf2f7", color: "black" }}>

                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"

                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/travellink1'>Link 1  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/travellink2'>Link 2  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/travellink3'>Link 3  </Link>  </MenuItem>

                    </MenuList>

                  </Menu>

                  <Menu isLazy >
                    <MenuButton bg="#335075" borderColor="white"
                      fontSize="20px" color="white" h='60px' fontFamily='["Times New Roman", "Times", "serif"]'
                      _hover={{ bg: "#444444", color: "white" }}  >
                      <Text>  Business  <ChevronDownIcon />  </Text>

                    </MenuButton>
                    <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                      fontSize="20px" color="white"
                      _hover={{ bg: "#edf2f7", color: "black" }}>

                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"

                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/businesslink1'>Link 1  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/businesslink2'>Link 2  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/businesslink3'>Link 3  </Link>  </MenuItem>

                    </MenuList>

                  </Menu>


                  <Menu isLazy >
                    <MenuButton bg="#335075" borderColor="white"
                      fontSize="20px" color="white" h='60px' fontFamily='["Times New Roman", "Times", "serif"]'
                      _hover={{ bg: "#444444", color: "white" }}  >
                      <Text>Benefits <ChevronDownIcon />  </Text>

                    </MenuButton>
                    <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                      fontSize="20px" color="white"
                      _hover={{ bg: "#edf2f7", color: "black" }}>

                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"

                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/benefitslink1'>Link 1  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/benefitslink2'>Link 2  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/benefitslink3'>Link 3  </Link>  </MenuItem>

                    </MenuList>

                  </Menu>

                  <Menu isLazy >
                    <MenuButton bg="#335075" borderColor="white"
                      fontSize="20px" color="white" h='60px' fontFamily='["Times New Roman", "Times", "serif"]'
                      _hover={{ bg: "#444444", color: "white" }}  >
                      <Text>  Health  <ChevronDownIcon />  </Text>

                    </MenuButton>
                    <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                      fontSize="20px" color="white"
                      _hover={{ bg: "#edf2f7", color: "black" }}>

                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"

                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/healthlink1'>Link 1  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/healthlink2'>Link 2  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='healthlink3'>Link 3  </Link>  </MenuItem>

                    </MenuList>

                  </Menu>
                  <Menu isLazy >
                    <MenuButton bg="#335075" borderColor="white"
                      fontSize="20px" color="white" h='60px' fontFamily='["Times New Roman", "Times", "serif"]'
                      _hover={{ bg: "#444444", color: "white" }}  >
                      <Text>   Taxes  <ChevronDownIcon />  </Text>

                    </MenuButton>
                    <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                      fontSize="20px" color="white"
                      _hover={{ bg: "#edf2f7", color: "black" }}>

                      {/* MenuItems are not rendered unless Menu is open */}
                      <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"

                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/taxeslink1'>Link 1  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/taxeslink2'>Link 2  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/taxeslink3'>Link 3  </Link>  </MenuItem>

                    </MenuList>

                  </Menu>

                  <Menu isLazy >
                    <MenuButton bg="#335075" borderColor="white"
                      fontSize="20px" color="white" h='60px' fontFamily='["Times New Roman", "Times", "serif"]'
                      _hover={{ bg: "#444444", color: "white" }}  >
                      <Text >  More Services  <ChevronDownIcon />  </Text>

                    </MenuButton>
                    <MenuList bg="#edf2f7" borderColor="rgb(0,0,0, 0.2)" boxShadow=" 2px 2px #888888"
                      fontSize="20px" color="white"
                      _hover={{ bg: "#edf2f7", color: "black" }}>


                      <MenuItem bg="#edf2f7" borderColor="black" borderRadius="1px" color="black" fontSize="20px"

                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/more_serviceslink1'>Link 1  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/more_serviceslink2'>Link 2  </Link>  </MenuItem>
                      <MenuItem bg="#edf2f7" borderColor="black" color="black" fontSize="20px"
                        _hover={{ bg: "#335075", color: "white" }}>
                        <Link to='/more_serviceslink3'>Link 3  </Link>  </MenuItem>

                    </MenuList>

                  </Menu>


                  <Box></Box><Box></Box><Box></Box><Box></Box>
                  <Box></Box><Box></Box><Box></Box><Box></Box>
                </Flex>
              </Flex>

            </HStack>
          </HStack>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ lg: 'none' }} >
            <Stack as={'nav'} spacing={4} fontSize={14}>
              <Collapse in={isOpen} animateOpacity  >
                <Accordion defaultIndex={[0]} gap={3} boxShadow=" 2px 2px #888888" bg='white' borderColor="#888888" >
                  <AccordionItem  >
                    <h2>
                      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"
                        _hover={{ bg: "#444444", color: "white" }} >
                        <Box flex='1' textAlign='left' >
                          Jobs
                        </Box>
                        <Box><Spacer /></Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
                      <Text><Link to='/jobsLink1'>Link 1  </Link></Text>
                      <Text><Link to='/jobsLink2'>Link 2  </Link></Text>
                      <Text><Link to='/jobsLink3'>Link 3  </Link></Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem  >
                    <h2>
                      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"
                        _hover={{ bg: "#444444", color: "white" }} >
                        <Box flex='1' textAlign='left' >
                          Immigration
                        </Box>
                        <Box><Spacer /></Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
                      <Text><Link to='/immigrationlink1'>Link 1  </Link></Text>
                      <Text><Link to='/immigrationlink2'>Link 2  </Link></Text>
                      <Text><Link to='/immigrationlink3'>Link 3  </Link></Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem  >
                    <h2>
                      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"
                        _hover={{ bg: "#444444", color: "white" }} >
                        <Box flex='1' textAlign='left' >
                          Travel
                        </Box>
                        <Box><Spacer /></Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
                      <Text><Link to='/travellink1'>Link 1  </Link></Text>
                      <Text><Link to='/travellink2'>Link 2  </Link></Text>
                      <Text><Link to='/travellink3'>Link 3  </Link></Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem  >
                    <h2>
                      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"
                        _hover={{ bg: "#444444", color: "white" }} >
                        <Box flex='1' textAlign='left' >
                          Business
                        </Box>
                        <Box><Spacer /></Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
                      <Text><Link to='/businesslink1'>Link 1  </Link></Text>
                      <Text><Link to='/businesslink2'>Link 2  </Link></Text>
                      <Text><Link to='/businesslink3'>Link 3  </Link></Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem  >
                    <h2>
                      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"
                        _hover={{ bg: "#444444", color: "white" }} >
                        <Box flex='1' textAlign='left' >
                          Benefits
                        </Box>
                        <Box><Spacer /></Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
                      <Text><Link to='/benefitslink1'>Link 1  </Link></Text>
                      <Text><Link to='/benefitslink2'>Link 2  </Link></Text>
                      <Text><Link to='/benefitslink3'>Link 3  </Link></Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem  >
                    <h2>
                      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"
                        _hover={{ bg: "#444444", color: "white" }} >
                        <Box flex='1' textAlign='left' >
                          Health
                        </Box>
                        <Box><Spacer /></Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" >
                      <Text><Link to='/healthlink1'>Link 1  </Link></Text>
                      <Text><Link to='/healthlink2'>Link 2  </Link></Text>
                      <Text><Link to='/healthlink3'>Link 3  </Link></Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem  >
                    <h2>
                      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"
                        _hover={{ bg: "#444444", color: "white" }} >
                        <Box flex='1' textAlign='left' >
                          Taxes
                        </Box>
                        <Box><Spacer /></Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" textAlign='left'>
                      <Text><Link to='/taxeslink1'>Link 1  </Link></Text>
                      <Text><Link to='/taxeslink2'>Link 2  </Link></Text>
                      <Text><Link to='/taxeslink3'>Link 3  </Link></Text>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem  >
                    <h2>
                      <AccordionButton bg="#edf2f7" borderColor="black" borderRadius="1px" color="black"
                        _hover={{ bg: "#444444", color: "white" }} >
                        <Box flex='1' textAlign='left' >
                          More Services
                        </Box>
                        <Box><Spacer /></Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel bg='rgb(240,240,240, 0.5)' borderColor="black" borderRadius="1px" textAlign='left' >
                      <Text><Link to='/more_serviceslink1'>Link 1  </Link></Text>
                      <Text><Link to='/more_serviceslink2'>Link 2  </Link></Text>
                      <Text><Link to='/more_serviceslink3'>Link 3  </Link></Text>
                    </AccordionPanel>
                  </AccordionItem>

                </Accordion>
              </Collapse>


            </Stack>
          </Box>
        ) : null}

      </nav>
      <Outlet />

    </Box>
  );
}