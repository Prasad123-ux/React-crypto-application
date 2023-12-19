import React from 'react'
import {Box, Image,Center, Text} from '@chakra-ui/react' 
 import image  from './bitcoin.jpg'
export default function Home() {
  return <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'} >
    <Center display={'flex'} flexDirection={'column'}>
      
     <Image w={'800px'} filter={"grayScale(1)"} h={'40vh'} objectFit={'contain'} mt={'20'}  borderRadius={'full'} src={image} /> 
    
    <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'700'} color={'grey'}  >
      CryptoFarm

    </Text>
    
    </Center>
    </Box>
}