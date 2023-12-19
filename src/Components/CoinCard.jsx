import React from 'react'
import { Image, Heading, VStack, Text } from '@chakra-ui/react' 
import {Link} from 'react-router-dom'
export default function CoinCard(props) {
  return (
    <div>
       <Link to={`/coin/${props.id}`}>
     <VStack w={'60'} shadow={'lg'} p={'8'} borderRadius={'lg'} transition={'all 0 3s'} m={'4'} css={{"&:hover":{transform:"scale(1.1)"}}}>
        <Image src={props.img} w={'10'} h={'10'} objectFit={'contain'} alt={'exchange'}  />
        <Heading size={'md'} noOfLines={'1'}>{props.symbol}</Heading>
        <Text noOfLines={'1'} >{props.name}</Text>
        <Text noOfLines={'1'} >{props.price? `${props.currencySymbol}  ${props.price}`:""}</Text>

     </VStack>
</Link>

    </div>
  )
}
