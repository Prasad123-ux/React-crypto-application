import { HStack, Button } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Heading() {
  return (
    <div>
      <HStack p={'4'} bg={'tomato'} h={'10vh'}>
        <Button variant={'unstyled'} color={'black'} bg={'none'} border={'none'} cursor={'pointer'}><Link to="/home">Home</Link></Button>
        <Button color={'black'} bg={'none'} border={'none'} cursor={'pointer'}><Link to="/coins">Coins</Link></Button>
        <Button color={'black'} bg={'none'} border={'none'} cursor={'pointer'}><Link to="/exchange">Exchange</Link></Button>
        {/* <Button color={'black'} bg={'none'} border={'none'} cursor={'pointer'}><Link to="CoinsDetail">CoinsDetail</Link></Button> */}


      </HStack>
    </div>
  )
}
