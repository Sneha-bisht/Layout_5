 'use client'
 import { Box,VStack,Text, Icon} from '@chakra-ui/react'
import React from 'react'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { PiStudent } from "react-icons/pi";
import { IoMdBook } from "react-icons/io";
import { MdOutlineAssessment } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
//  import logo1 from  "@/logo.png";

function Sidebar() {
  return (
    <Box w='296px' h='1047.5px' borderRight={'2px solid #E2E2E2'} bg='#FFFFFF'>

   
    <Box w='296px' h='677.5px' bg='#FFFFFF' borderRight={'2px solid #E2E2E2'} >
        <Box h='84px' borderBottom={'2px solid #E2E2E2'} bg='#FFFFFF'>
          <Text fontFamily={'Karla'} fontWeight={700} fontSize={'28px'}
   lineHeight={'36px'} color='#0048BA' w='129px' h='36px' m='auto' py='20px' textAlign={'center'}>
    {/* <img src={logo1}/> */}
    Pitufo</Text></Box>

    <VStack w='285.79px' h='560px' mt='30px' spacing={'4'}>
     <Box w='285.79px' h='56px' px='65px' py='12px' alignContent='center'> 
      <Text className='text' alignContent={'center'} ml='6'>
      <Icon as={MdOutlineDashboardCustomize} h='16px' w='16px' color='#212121' mr='4px'></Icon> DashBoard
      </Text>
      </Box>
     <Box w='285.79px' h='56px' px='65px' py='12px' alignContent='center'>
       <Text className='text' alignContent={'center'} ml='6'><Icon as={CiCalendar} h='16px' w='16px' color='#212121' mr='4px'></Icon> Calendar 
      </Text>
      </Box>
     <Box w='285.79px' h='56px' px='65px' py='12px' alignContent='center'> 
      <Text className='text' alignContent={'center'} ml='6'><Icon as={BiMessageDetail} h='16px' w='16px' color='#212121' mr='4px'></Icon> Messages 
      </Text>
      </Box>
     <Box w='285.79px' h='44px' px='65px' py='12px' borderRadius={'8px'} alignContent='center' bg='#E8F1FF'>
       <Text  alignContent={'center'} ml='6' w='116px' h='20px' fontFamily={'Karla'} fontWeight={700} fontSize={'20px'} lineHeight={'20px'}  color='#0048BA'> <Icon as={PiChalkboardTeacherLight} w='20px' h='18px' color={'#0048BA'}></Icon> Teachers </Text>
       </Box>
     <Box w='285.79px' h='56px' px='65px' py='12px' alignContent='center'>
       <Text className='text' alignContent={'center'} ml='6'><Icon as={PiStudent} h='16px' w='16px' color='#212121' mr='4px'></Icon> Students </Text>
       </Box>
     <Box w='285.79px' h='56px' px='65px' py='12px' alignContent='center'> 
      <Text className='text' alignContent={'center'} ml='6'><Icon as={IoMdBook} h='16px' w='16px' color='#212121' mr='4px'></Icon> Library </Text>
      </Box>
     <Box w='285.79px' h='56px' px='65px' py='12px' alignContent='center'>
       <Text className='text' alignContent={'center'} ml='6'><Icon as={MdOutlineAssessment} h='16px' w='16px' color='#212121' mr='4px'></Icon> Sessions </Text>
       </Box>
     <Box w='285.79px' h='56px' px='65px' py='12px' alignContent='center'>
       <Text className='text' alignContent={'center'} ml='6'><Icon as={RiBillLine} h='16px' w='16px' color='#212121' mr='4px'></Icon> Billing </Text>
      </Box>
        </VStack>
        <Box w='285.79px' h='56px' px='65px' py='12px' alignContent='center'>
       <Text className='text' alignContent={'center'} ml='6'><Icon as={AiOutlineSetting} h='16px' w='16px' color='#212121' mr='4px'></Icon> Settings </Text>
      </Box>

    </Box>

    <Box w='296px' h='70px' px='65px' py='12px' alignContent='center' borderTop={'2px solid #E2E2E2'}  mt='250px'>
       <Text className='text' alignContent={'center'} ml='6'><Icon as={IoIosLogOut} h='16px' w='16px' color='#212121' mr='4px'></Icon>Log out </Text>
      </Box>
   
    </Box>
  )
}

export default Sidebar
