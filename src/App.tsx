import Navbar from './navbar';
import Header from './Header';
import Footer from './footer';

import { ChakraProvider } from '@chakra-ui/react'




export default function App() {

  return (
    
    <ChakraProvider>
      <Header />
      <Navbar />      

      
      <Footer />      
      
     
    </ChakraProvider>
    
    
  )
}