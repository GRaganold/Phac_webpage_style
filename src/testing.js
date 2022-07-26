import styled from '@emotion/styled'
import { useDisclosure, MenuItem, Menu, MenuButton, MenuList, Box, Button, MenuItemOption, MenuDivider, MenuOptionGroup, Flex, Divider, Center, HStack } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'


const Div = styled.div`
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: wrap;
    background-color: #335075;
    font-family: "Times New Roman", Times, serif;
    display:flex;
    justify-content: center;   
    
  }
  
  li {
    float: left;
    border-left: 1px solid #bbb
  }
  li:last-child {
    border-right: 1px solid #bbb;
  }
  
  li a, .dropbtn {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 40px;
    text-decoration: none;
    font-family: "Times New Roman", Times, serif;
  }
  
  li a:hover, .dropdown:hover .dropbtn {
    background-color: #243850;
    font-family: "Times New Roman", Times, serif;
  }
  
  li.dropdown {
    display: inline-block;
    color: c6f3ff;
    font-family: "Times New Roman", Times, serif;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #cccccc;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
    z-index: 1;
    font-family: "Times New Roman", Times, serif;
  }
  
  .dropdown-content a {
    color: #444444;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    font-family: "Times New Roman", Times, serif;
  }
  
  .dropdown-content a:hover {
    background-color: #243850;
    color: #ffffff;
    font-family: "Times New Roman", Times, serif;
    
}
  
  .dropdown:hover .dropdown-content {
    display: block;
    font-family: "Times New Roman", Times, serif;
    
  }
`


export default function Navbar() {

  return (
    <div>
      <br></br>
      <Flex w="100%" align="center" justify="Center" wrap="wrap" direction="row" bg="#335075"   >

        <HStack align="center" flex-wrap="wrap-reverse" direction="row" bg="white" h="auto"  >
          <Div>

            <ul>
              <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn"><strong>Jobs </strong> <ChevronDownIcon /> </a>
                <div className="dropdown-content">
                  <a href="https://google.com" rel="noreferrer">Google.com
                  </a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
              <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn"><strong>Jobs </strong> <ChevronDownIcon /> </a>
                <div className="dropdown-content">
                  <a href="https://google.com" rel="noreferrer">Google.com
                  </a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
              

            </ul>
          </Div>


        </HStack>


      </Flex>
<br></br>
<br></br>


      <Flex w="100%" align="center" justify="Center" wrap="wrap" direction="row" bg="#335075">

        <HStack align="center" flex-wrap="wrap-reverse" direction="row" h="auto"  >
          <Box>
            <a href="javascript:void(0)" className="dropbtn"><strong>Jobs </strong> <ChevronDownIcon /> </a>


          </Box>
          <Box w='40px' h='40px' bg='tomato'>
            2
          </Box>
          <Box w='40px' h='40px' bg='pink'>
            3
          </Box>
        </HStack>
      </Flex>

    </div>

  );
};
