"use client"

import React from 'react'
import { BsCartDash } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { BsQuestion } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Box, Button, Flex, Icon ,Input,InputGroup,InputLeftElement,Text} from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';

function Navbar() {
  return (
  <Box>
    
    <Flex  justifyContent={'space-between'}>
        <Text w='117px' h='19px' fontFamily={"Karla"} fontWeight={'700'} fontSize={'28px'} lineHeight={'48px'} color='#212121'  ml='44px' mt='28px'>Teachers</Text>
        <Box h='48px' w='311px'mt='28px' ml='789px' alignItems={'center'} >
        <Icon  p='2'w='40px' h='38px' as={BsCartDash } border="1px solid #E2E2E2" borderRadius='7px' bg='white' ml='123px' color='#000000'></Icon>
        <Icon  p='2'w='38px' h='38px' as={VscBellDot} border="1px solid #E2E2E2" borderRadius='7px' bg='white'ml='2' color='#212121'></Icon>
        <Icon  p='2'w='38px' h='38px' as={BsQuestion} border="1px solid #E2E2E2" borderRadius='7px' bg='white' ml='2' color='#212121'></Icon>
        <Icon  p='2'w='38px' h='38px' as={FaUserCircle}  ml='2' color='#ffffff' bg='#2A47D5' borderRadius={'50px'}></Icon>
        </Box>
    </Flex>

<Flex justifyContent={"space-between"}> 


<Box w="600px" h="36px" borderRadius="7px" mt="30px" ml="44px" position="relative">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={CiSearch} color="gray.500" />
        </InputLeftElement>

        <Input
          type="text"
          placeholder="Search here"
          w="410px"
          h="36px"
          pl="40px"
        />
        
      <Button w="66px" h="36px" bg="#2A47D5" color="white" p="8px" borderRadius="7px" ml="5px" mb="2">
        Search
      </Button>
      </InputGroup>

      
    </Box>
 


<Box h='36px' w='204px' p='9.83px' border='1px solid #E2E2E2' borderRadius={'6.88px'} mt='30px' ml='150px'><Text
  w='76px' h='16px' fontFamily={'Karla'} fontWeight={400} fontSize={'14px'} lineHeight='16.37px' color='#000000' ml='55px'> 
  All Subjects</Text></Box>
  <Box h='36px' w='231px' p='9.83px' border='1px solid #E2E2E2' borderRadius={'6.88px'} mt='30px' ><Text
  w='113px' h='22px' fontFamily={'Karla'} fontWeight={400} fontSize={'14px'} lineHeight='16.37px' color='#000000' ml='55px'> 
  Select Teacher</Text></Box>

</Flex>
  </Box>
  )
}

export default Navbar
