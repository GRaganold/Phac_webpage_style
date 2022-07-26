import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  Flex,
  Text,
  chakra,
  Box,
  Switch,
  IconButton,
  HStack,ChakraProvider, styled
} from '@chakra-ui/react';
import { ChevronRight } from '@chakra-ui/react'
import { CSSTransition } from 'react-transition-group';

const Div=styled.div`
:root {
  --bg: #242526;
  --bg-accent: #484a4d;
  --text-color: #dadce1;
  --nav-size: 60px;
  --border: 1px solid #474a4d;
  --border-radius: 8px;
  --speed: 500ms;
  --menu-item-width: 14rem;
}

.App {
  font-family: sans-serif;
  text-align: center;
}

.css-r6z5ec {
  overflow: hidden;
  transition: height 500ms ease;
}

.chakra-menu__menu-list {
  transition: height 500ms ease;
}

/* chakra ui menu item */
.css-593qcw {
  width: var(--menu-item-width) !important;
}

.menu-primary-enter {
  position: absolute;
  transform: translateX(-110%);
}
.menu-primary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-primary-exit {
  position: absolute;
}
.menu-primary-exit-active {
  transform: translateX(-110%);
  transition: all var(--speed) ease;
}

.menu-secondary-enter {
  transform: translateX(110%);
}
.menu-secondary-enter-active {
  transform: translateX(0%);
  transition: all var(--speed) ease;
}
.menu-secondary-exit {
}
.menu-secondary-exit-active {
  transform: translateX(110%);
  transition: all var(--speed) ease;
}

`

export default function TestingMenu() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DropdownMenu />
    </div>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height + 20);
  }

  return (
    <ChakraProvider>

    <Div>
      <Menu className="dropdown" closeOnSelect={false}>
        <MenuButton as={Button} >
          Actions
        </MenuButton>
        <MenuList style={{ height: menuHeight }} className="dropdown">
          <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}
            >
            <div className="main-menu">
              <MenuItem onClick={() => setActiveMenu('settings')}>
                <Text>Settings</Text>
                <Box pos="absolute" ml="80%">
                  
                </Box>
              </MenuItem>
              <MenuItem onClick={() => setActiveMenu('animals')}>
                Animals
                <Box pos="absolute" ml="80%">
                
                </Box>
              </MenuItem>
              <MenuItem>
                Coding
                <Box pos="absolute" ml="80%">
                  
                </Box>
              </MenuItem>
            </div>
          </CSSTransition>

          <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
            >
            <div className="menu-container">
              <HStack mb="8" spacing="60%">
                <Box>
                  <IconButton
                    variant="outlined"
                    
                    onClick={() => setActiveMenu('main')}
                    />
                </Box>
                <Switch />
              </HStack>
              <Box>
                <Text>Generate your words here</Text>
              </Box>
            </div>
          </CSSTransition>

          <CSSTransition
            in={activeMenu === 'animals'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}
            >
            <div className="menu-container">
              <MenuItem onClick={( ) => setActiveMenu('main')}>Go back</MenuItem>
              <MenuItem>
                <p>Dog</p>
              </MenuItem>
              <MenuItem>
                <p>Cat</p>
              </MenuItem>
              <MenuItem>
                <p>Bird</p>
              </MenuItem>
            </div>
          </CSSTransition>
        </MenuList>
      </Menu>
    </Div>
</ChakraProvider>
  );
}

// function SubMenus() {
  //   return (
    
    //   )
    // }
    