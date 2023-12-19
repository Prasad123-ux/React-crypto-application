import { Badge, HStack, Progress, VStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function CustomBar({high, low}) {
  return (
    <div>
      <VStack w={'full'} ><Progress value={50} colorScheme='teal' w={'full'}/>
      <HStack justifyContent={'space-between'} w={'full'}>
        <Badge children={low} colorScheme='red' />
        <Text fontSize={'sm'}> 24H Range </Text>
        <Badge children={high} bgColor={'green'}/>  
                    </HStack>
         </VStack>
    </div>
  )
}
