import styled from '@emotion/styled'
import { useDisclosure, MenuItem, Menu, MenuButton, MenuList, Box, Button, MenuItemOption, MenuDivider, MenuOptionGroup, Flex, Divider, Center } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'


const MenuItemCss = styled.div`
  
`


export default function Navbar() {

  return (
    <div>
<br></br>
      <Flex w="100%" align="center" justify="Center" wrap="wrap" direction="row" bg="#335075"   >

        <Box align="center" flex-wrap="wrap-reverse" direction="row" bg="white" h="auto"  >

          <div>
            
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
                Jobs  <ChevronDownIcon />

              </MenuButton>
              <MenuList bg="#335075" borderColor="transparent"
                fontSize="20px" color="white" 
                _hover={{ bg: "#444444", color: "white" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem   bg="#444444" borderColor="transparent" color="white" fontSize="20px" 
                  _hover={{ bg: "#cccccc", color: "#333333" }}
                  >
                  <a href='www.google.ca'>Link 1</a> </MenuItem>



                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 2 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 3 </MenuItem>

              </MenuList>

            </Menu>
            
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white" fontFamily='["Times New Roman", "Times", "serif"]'
                _hover={{ bg: "#444444", color: "white" }}>
                Immigration  <ChevronDownIcon />

              </MenuButton>
              <MenuList bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
                  
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 1 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 2 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 3 </MenuItem>

              </MenuList>

            </Menu>
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
                Travel  <ChevronDownIcon />

              </MenuButton>
              <MenuList bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 1 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 2 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 3 </MenuItem>

              </MenuList>

            </Menu>
            
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"fontFamily='["Times New Roman", "Times", "serif"]'
                _hover={{ bg: "#444444", color: "white" }}>
                Business  <ChevronDownIcon />

              </MenuButton>
              <MenuList bg="#335075" borderColor="transparent"
                fontSize="20px" color="white" 
                _hover={{ bg: "#444444", color: "white" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 1 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 2 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 3 </MenuItem>

              </MenuList>

            </Menu>


            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white" fontFamily='["Times New Roman", "Times", "serif"]'
                _hover={{ bg: "#444444", color: "white" }}>
                Benefits <ChevronDownIcon />

              </MenuButton>
              <MenuList bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 1 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 2 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 3 </MenuItem>

              </MenuList>

            </Menu>
            
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
                Health  <ChevronDownIcon />

              </MenuButton>
              <MenuList bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 1 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 2 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 3 </MenuItem>

              </MenuList>

            </Menu>
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
                Taxes  <ChevronDownIcon />

              </MenuButton>
              <MenuList bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 1 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 2 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 3 </MenuItem>

              </MenuList>

            </Menu>
            
            <Menu isLazy >
              <MenuButton bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>
                More Services  <ChevronDownIcon />

              </MenuButton>
              <MenuList bg="#335075" borderColor="transparent"
                fontSize="20px" color="white"
                _hover={{ bg: "#444444", color: "white" }}>

                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 1 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 2 </MenuItem>
                <MenuItem bg="#444444" borderColor="transparent" color="white" fontSize="20px"
                  _hover={{ bg: "#cccccc", color: "#333333" }}>
                  Link 3 </MenuItem>

              </MenuList>

            </Menu>

          </div>


        </Box>


      </Flex>


    </div>

  );
};
