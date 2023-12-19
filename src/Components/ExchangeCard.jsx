import { VStack, Image, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'


export default function ExchangeCard(props) {
  return (
    <div>
      <a href={props.url} target={'blank'} >
     <VStack w={'60'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0 3s'} m={'4'} css={{"&:hover":{transform:"scale(1.1)"}}}>
        <Image src={props.img} w={'10'} h={'10'} objectFit={'contain'} alt={'exchange'}  />
        <Heading size={'md'} noOfLines={'1'}>{props.rank}</Heading>
        <Text noOfLines={1} >{props.name}</Text>     </VStack>


      </a>
    </div>
  )
}
  