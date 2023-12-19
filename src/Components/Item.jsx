import React from 'react'
import {HStack, Text}  from '@chakra-ui/react'

export default function Item({title, value}) {
  return (
    <HStack justifyContent={'space-between'} width={'full'} my={'4'}>
      <Text fontWeight={'700'} letterSpacing={'widest'}>{title}</Text>
      <Text>{value}</Text>
    </HStack>
  )
}
