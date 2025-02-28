"use client";

import { Box, Button, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export default function Footer() {
  return (
    <Box w="1056px" h="62px" bg="#ffffff" display="flex" justifyContent="center" ml="45px" mt="5px">
      <Box w="1008px" h="36px" ml="24px" display="flex" alignItems="center" justifyContent={"center"}>
        <span className="span-text">Showing 1 to 10 of 20 results</span>
        
       
        <Box w="312px" h="32px" ml="50px"  mt='8px'display="flex" alignContent={'center'}>
          <IconButton
            icon={<ChevronLeftIcon />}
            aria-label="Previous"
            isDisabled
            className="Icon" mr='4px'
          />

          
          <Box display="flex" gap="10px">
            <Button className="btn-1">1</Button>
            <Button className="btn">2</Button>
            <Button className="btn">3</Button>
            <Button className="btn">4</Button>
          </Box>

          <span className="px-4" >...</span>

          <Box display="flex" gap="8px">
            <Button className="btn">10</Button>
            <Button className="btn">11</Button>
          </Box>

          <IconButton
            icon={<ChevronRightIcon />}
            aria-label="Next"
            className="Icon"
            ml="4px"
          />
        </Box>
        <Box h='36px' w='66.67px' borderRadius={'7px'} bg='#0048BA1F' color='#0048BA' ml="310px" mt="20px" textAlign={'center'} p='2px'> Previous</Box>
        <Box h='36px' w='66.67px' borderRadius={'7px'} bg='#0998F7'color='white' ml="10px" mt="20px" textAlign={'center'} p='2px'> Next</Box>
        
      </Box>
    </Box>
  );
}
