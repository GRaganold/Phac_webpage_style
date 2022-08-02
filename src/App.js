import Header from './header';
import Navbar from './nav';
import Footer from './footer';
import MainBody from './Main';
import DrawerExample from './drawner_menu';
import Testing from './testing';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import MenuDrawer from './Menu_drawer';

export default function App() {
  return (
<ChakraProvider>

    <div>
      <Header/>
      <Testing />
    
     <Footer />
    </div>

</ChakraProvider>

  );
}