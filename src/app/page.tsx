import DataTable from '@/components/DataTable'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

import { Box, Flex} from '@chakra-ui/react'
import React from 'react'

function page() {
  return (
    <Flex>
      <Box w='296px' h='1047.5px' bg={'white'}>
        <Sidebar/>
      </Box>
       <Box flex={1} h='1047.5px' bg='#ffffff'>
        <Navbar/>
        <DataTable/>
        <Footer/>
       </Box>
      
    </Flex>
  )
}

export default page
