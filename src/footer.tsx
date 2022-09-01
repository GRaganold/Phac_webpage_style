import { Box,Container,Link,SimpleGrid,Stack,Image,  } from '@chakra-ui/react';

var FooterLogo = require('./CanadaLogo.png')

 
  export default function Footer() {
    return (
        
      <>
      
      <Box
        bg= "#444444"
        color= "white"        
        
        >


         {/* Start Upper Footer Menu Display Large or Above */}   
        <Container as={Stack} maxW={'6xl'} py={8}  display={{ base: 'none', md: 'flex' }}>            
          <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={8} flex='1' justifyItems="space-around">
              <Stack align={'flex-start'} >              
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Contact us</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Departments and agencies</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Public service and military</Link>
            </Stack>
            <Stack align={'flex-start'}>              
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>News</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Treaties, laws, regulations</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Government-wide reporting</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Prime Minister</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>About government</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Open government</Link>
            </Stack>  
            
               
          </SimpleGrid>
       
         
        </Container>
       
{/* End Upper Footer Menu Display Large or Above */}


        {/* Start Upper Footer Menu Display Medium or Below */}
        <Container as={Stack} maxW={'6xl'} py={8}  display={{ sm: 'flex', md:'none' }}>            
          <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} spacing={8} flex='1' justifyItems="space-around" fontSize={14}>
              <Stack align={'flex-start'} >              
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Contact us </Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Departments and agencies</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Public service and military</Link>            
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>News</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Treaties, laws, regulations</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Government-wide reporting</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Prime Minister</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>About government</Link>
              <Link href={'#'} _hover={{color: '#0089c7', textDecoration: 'underline'}}>Open government</Link>
            </Stack>   
          </SimpleGrid>
       {/* End Upper Footer Menu Display Medium or Below */}

          
        </Container>


        </Box>
        <Box>
          {/* Start Lower menu display Large or above   */}
        <Container as={Stack} maxW={'6xl'} py={1} display={{ base: 'none', md: 'flex' }} >
          <SimpleGrid columns={{ base: 1, sm: 3, md: 6, lg:6 }} spacing={2} bg='white'  >
            
              <Stack align={'center'} justify={'center'} direction='row'><Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}}> Social Media </Link> </Stack>             
<Stack align={'center'} justify={'center'} ><Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}} > Mobile applications</Link></Stack>  
<Stack align={'center'} justify={'center'} direction='row'  ><Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}} > About Canada.ca</Link></Stack>  
<Stack align={'center'} justify={'center'} direction='row'  ><Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}} > Terms and Conditions</Link></Stack>  
<Stack align={'center'} justify={'center'} direction='row'  >
    <Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}} > Privacy</Link> </Stack>
            <Image src={FooterLogo} /> 
          </SimpleGrid>
          
        </Container>
        {/* End Lower menu display Large or above   */}



          {/* Start Lower menu display medium or below   */}
        <Container as={Stack} maxW={'6xl'} py={1} display={{ sm: 'flex', md:'none' }}>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} spacing={2} bg='white' fontSize={14} >            
              <Stack >
                <Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}}> Social Media</Link> 
                           
                <Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}} > Mobile applications</Link>
                 
                <Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}} > About Canada.ca</Link>
                 
                <Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}} > Terms and Conditions</Link> 
                  
                <Link href={'#'} color='#0089c7' _hover={{color: 'purple', textDecoration: 'underline'}} > Privacy</Link> </Stack>
                <Box></Box>
        
            <Image src={FooterLogo}  h='50%'/> 
          </SimpleGrid>
          
        </Container>
        {/* End Lower menu display medium or below   */}

       
      </Box>
   

</>
    );
  }