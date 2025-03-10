"use client"
import { Table, Thead,Text, Tbody, Tr, Th, Td, TableContainer, Avatar, IconButton, Spacer } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

const data = [
  { Teacher: "Elizabeth Lopez", "Last Session Attended": "Math - Intermediate", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "Math" },
  { Teacher: "Matthew Martinez", "Last Session Attended": "English - Intermediate", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "English" },
  { Teacher: "Elizabeth Hall", "Last Session Attended": "Science - Intermediate", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "Science" },
  { Teacher: "Maria White", "Last Session Attended": "Tech - Intermediate", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "Tech" },
  { Teacher: "Elizabeth Victoria", "Last Session Attended": "Arts & Humanities - 101", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "Arts & Hu." },
  { Teacher: "Elizabeth Lopez", "Last Session Attended": "Math - Intermediate", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "Math" },
  { Teacher: "Matthew Martinez", "Last Session Attended": "English - Intermediate", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "English" },
  { Teacher: "Elizabeth Hall", "Last Session Attended": "Science - Intermediate", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "Science" },
  { Teacher: "Maria White", "Last Session Attended": "Tech - Intermediate", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "Tech" },
  { Teacher: "Elizabeth Victoria", "Last Session Attended": "Arts & Humanities - 101", "Date & Time": "Aug 25, 2024, 06:06 PM", Subject: "Arts & Hu." },
];

 function DataTable() {
  return (
    <TableContainer w='1056px' ml='59px' mt='25px'  >
      <Table>
      <Thead  borderRadius={'16px'}  alignContent={'center'}>
      <Tr fontFamily={'Karla'}fontWeight={600} fontSize={'16px'} lineHeight={'47.19px'} color='#64748B'  >
      <Th>
      <Text h='29px' w='134px' textAlign={'center'}>Teacher</Text>
      </Th>
      <Th >
        <Text  w='168px' h='16px'  textAlign={'center'}>Last Session Attended</Text></Th>
      <Th>
        <Text  w='116px' h='29px' textAlign={'center'}>Date & Time
        </Text></Th>
      <Th>
        <Text w='59px' h='29px'  textAlign={'center'}>Subject</Text></Th>
      <Th>
        <Text w='50.18' h='29px'  textAlign={'center'}> Action</Text></Th>
    </Tr>
        </Thead>
        <Tbody textAlign={'center'}>
          {data.map((item, index) => (
            <Tr key={index}>
              <Td display="flex" alignItems="center" fontFamily='Karla' fontWeight='600' fontSize='14px' color='#212121' >
                <Avatar name={item.Teacher} size="sm" mr={3} />
                <Text w='143' h='29' textAlign={'center'}>
                {item.Teacher} </Text> 
              </Td>
             
              <Td fontFamily='Karla' fontWeight='500' fontSize='14px' color='#212121'  
              ><Text w='214' h='29' textAlign={'center'}>{item["Last Session Attended"]}</Text></Td>
              
              <Td fontFamily='Karla' fontWeight='500' fontSize='14px' color='#212121' >
                <Text w='149' h='29' textAlign={'center'}>{item["Date & Time"]}</Text></Td>
              <Td fontFamily='Karla' fontWeight='500' fontSize='14px' color='#212121' >
                <Text w='73' h='29' textAlign={'center'}>{item.Subject} </Text></Td>
              <Td>
                <IconButton aria-label="More options" icon={<FiMoreVertical color='#2A47D5'/>} w='38px' h='38px' border='1.36px solid #E2E2E2'  borderRadius={'9.5px'} bg='#ffffff'/>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default DataTable

