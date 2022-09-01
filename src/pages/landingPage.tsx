

import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../footer'
import Header from '../Header'
import Navbar from '../navbar'




export default function App() {

  return (
    
    <ChakraProvider>
      <Header />
      <Navbar />      

      <h1>this is a test</h1>
      <Footer />      
      
     
    </ChakraProvider>
    
    
  )
}