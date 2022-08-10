import {Flex, ChakraProvider, Text  } from '@chakra-ui/react';
import { Link,Image, } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'

var govCanImage = require('./govcanimage.png')


export default function Header() {
  return (
    <ChakraProvider>
        <Flex w="100vw" 
        display={['none', 'none', 'none' , 'flex']}>

        <Grid
  
  w='100vw'
  templateRows='repeat(2, 1em)'
  templateColumns='repeat(12, 1fr)'
  gap={2}
>
  <GridItem rowSpan={4} colSpan={1} />
  <GridItem colSpan={7}  />
   <GridItem colSpan={1} >
    <Text align='right' color= '#0089c7'> <Link href="https://Canada.ca" rel="noreferrer" _hover={{color: 'purple', textDecoration: 'underline'}}><u>Français</u></Link></Text> 
    </GridItem> 
    <GridItem rowSpan={2}colSpan={3} /> 
    <GridItem rowSpan={2}colSpan={1} />
     
  <GridItem rowSpan={3} colSpan={2} flex='1'   justifyItems={'center'}><Link href="https://Canada.ca" rel="noreferrer">
    <Image src={govCanImage} />  


</Link></GridItem>

</Grid>
          


        </Flex>
{/* XL Display Ends */}

<Flex w="100vw" 
        display={['none', 'none', 'flex', 'none']}>

        <Grid
  
  w='100vw'
  templateRows='repeat(2, 20px)'
  templateColumns='repeat(12, 1fr)'
  gap={4}
>
<GridItem rowSpan={1}colSpan={1} />

  <GridItem rowSpan={1}colSpan={7} />
  <GridItem rowSpan={1}colSpan={1} >
    <Text align='right'> <Link href="https://Canada.ca" rel="noreferrer"><u>Français</u></Link></Text> 
    </GridItem> 
   
    <GridItem rowSpan={1}colSpan={3}  />
    <GridItem rowSpan={1}colSpan={1}  />
  <GridItem rowSpan={1}colSpan={4}  ><Link href="https://Canada.ca" rel="noreferrer">
  <Image src={govCanImage} align='center'/> 
</Link></GridItem>

<GridItem colSpan={8}  />


  
  
</Grid>


        </Flex>

{/* Medium and small starts  */}
        <Flex w="100vw" 
        display={['flex', 'flex', 'none', 'none']}>

        <Grid
  
  w='100vw'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(8, 1fr)'
  gap={4}
>
  
  <GridItem rowSpan={1}colSpan={3} />
  <GridItem rowSpan={1}colSpan={3} >
    <Text align='right' fontSize={'12'}> <Link href="https://Canada.ca" rel="noreferrer"><u>Français</u></Link></Text> 
    </GridItem> 
    <GridItem colSpan={2} />
    <GridItem colSpan={2} />
  <GridItem rowSpan={1}colSpan={4} justifyItems='center' ><Link href="https://Canada.ca" rel="noreferrer">
  <Image src={govCanImage} justifyItems='center' maxWidth={"88%"}/>

</Link></GridItem>

  
</Grid>


        </Flex>
        
      
    </ChakraProvider>

);
}
