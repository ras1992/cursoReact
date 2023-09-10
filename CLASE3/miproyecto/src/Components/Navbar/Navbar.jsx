import {Box,Flex, Text} from '@chakra-ui/react'
import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
        <>
        <Text bg={'grey'} color={{base:'red', md:'blue', lg:'green'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor totam laudantium sequi? Harum, magni veritatis ea dolorem illo at, eligendi doloribus odio esse cumque mollitia molestiae molestias totam a dolores?</Text>
        {/* <Flex as={"nav"} bg={'gray.200'} justify="space-between" wrap="wrap">
            <Box w={'150px'} h={'50px'} bg={"red"}>1</Box>
            <Box w={'150px'} h={'50px'} bg={"blue"}>2</Box>
            <Box w={'150px'} h={'50px'} bg={"green"} flexGrow={'1'}>3</Box>
            <Box w={'150px'} h={'50px'} bg={"yellow"} flexGrow={'3'}>4</Box>
       </Flex> */}
        </>
    )
}

export { Navbar }