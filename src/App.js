import Header from './header';
import Navbar from './nav';
import Footer from './footer';
import MainBody from './Main';
import DrawerExample from './drawner_menu';
import TestingMenu from './testing';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  return (
<ChakraProvider>

    <div>

      
    
     <TestingMenu />
    </div>

</ChakraProvider>

  );
}