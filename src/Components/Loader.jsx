import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Loader() {
  return (
    <div>
      <VStack h={'90vh'} justifyContent={'center'} >
        <Box transform={"scale(3)"}><Spinner size={'xl'}/></Box>

      </VStack>
    </div>
  )
}
