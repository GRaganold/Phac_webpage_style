import { Box, Center, Container, Image } from '@chakra-ui/react';



var govCanImage = require('./CanadaLogo.png')

function Footer(){
return (
    <>

<Container pos="fixed" w="100%" bottom="0" bg="white" h="80px" justify="end" wrap="wrap" direction="row" overflow="break-word ">
<div>
<Box bg='#335075' w='99%' p={1} color='white' h="1px" wrap="wrap" direction="row">
  This is the Box
</Box>
</div>
    <Center gap={4} wrap="wrap" direction="row">
<Box as='a'  href='https://www.canada.ca/en/social.html' fontWeight='bold' p={10}wrap="wrap" direction="row">
    Social media
  </Box>
  <Box wrap="wrap" direction="row"> • </Box>
  <Box as='a' href='https://www.canada.ca/en/mobile.html' fontWeight='bold' p={10}wrap="wrap" direction="row">
    Mobile applications
  </Box>
  <Box wrap="wrap" direction="row"> • </Box>
  <Box as='a'  href='https://www.canada.ca/en/government/about.html' fontWeight='bold' p={10}wrap="wrap" direction="row">
    About Canada
  </Box>
  <Box wrap="wrap" direction="row"> • </Box>
  <Box as='a'  href='https://www.canada.ca/en/transparency/terms.html' fontWeight='bold' p={10}wrap="wrap" direction="row">
    Terms and conditions
  </Box>
  <Box wrap="wrap" direction="row"> • </Box>
  <Box as='a' href='https://www.canada.ca/en/transparency/privacy.html' fontWeight='bold' p={10}wrap="wrap" direction="row">
    Privacy
  </Box>
  
  <Box wrap="wrap" direction="row"><Image src={govCanImage} alt="asdasda" w="auto" h="56px" overflow="hidden"/></Box>

    </Center>
    
</Container>

    </>

);
}

export default Footer