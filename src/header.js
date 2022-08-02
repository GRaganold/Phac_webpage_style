import styled from '@emotion/styled'
import { Box, Divider, Flex, Spacer } from '@chakra-ui/react';
import React from "react";
import { Link } from '@chakra-ui/react';

const CssHeader = styled.header`
    
.not_button {
    background:url('./search_icon_white.png') no-repeat;
    background-position: center;
    background-color: #335075;
    align-items:flex-start;
    color: white;  
    padding: 8px 8px;  
    cursor: pointer;
    border-color: #335075;
    font-family: "Times New Roman", Times, serif;
  }

.not_button:hover {
    background-color: #243850;
    border-color: #243850 ;
    font-family: "Times New Roman", Times, serif;
  }
  
.searching {
    width: fit-content;
    height: fit-content;
    max-height: 18px;
    max-width: 18px;
    text-align: center;
    font-family: "Times New Roman", Times, serif;
  }
  
.govCan {  
    border-color: transparent;
    max-height: 350px;
    max-width: 350px; 
    display: flex; 
    align-items: center;
    justify-items: center;
    
  }
  
  
#search_bar {
    display: flex;
    align-items: flex-end;
    border-radius: 1px;
    border-color: #335075;
    font-family: "Times New Roman", Times, serif;
  }
 
input{
    font-size: 18px;
  }
  
.searchIcon {  
    border-color: none;
    height: 8px;
    width: 8px; 
    display: flex; 
    align-items: center;
    justify-items: center;
    
  }
*{
  box-sizing: border-box
}

  
`

var govCanImage = require('./govcanimage.png')
var searchIcon = require('./search_icon_white.png')

export default function Header() {
  return (
    <CssHeader>
      <Flex
        w="80%"
        align="center"
        justify="space-between"
        fontSize="14px"  >
        
        <Spacer />
        {/* Change link here to translated page */}
        <Link href="javascript:void(0)" >
          Français
        </Link>
        <Box w="5%"></Box>
      </Flex>     
        
          <Flex 
          w="100%"
          align="center"
          justify="space-between"
          alignItems="center">
            <Box w="3%"></Box>
            <div>
              <a href="https://Canada.ca" rel="noreferrer" ><img className="govCan" src={govCanImage} alt="govCanadaLogo" /></a>
            </div>
            <div id="search_bar">
              <label htmlFor="searchBar" ></label>
              <input type="text" id="search_bar" placeholder="Search Canada.ca"  >
              </input>
              <button className="not_button"  ><a href="javascript:void(0)"> <img className="searchIcon" src={searchIcon} alt="search" /> </a>
              </button>
            </div>
            <Box w="3%"></Box>
          </Flex>
          <Flex
    w='100vw'
        h='5px'
    >
      
    </Flex>
    <Flex
    w='100vw'
    bg='white'
    h='5px'
    >
      
<Spacer />
    </Flex>
    </CssHeader>
  );
}
