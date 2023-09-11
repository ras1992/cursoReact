import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa'; // Replace 'fa' with the correct FontAwesome library
import React from 'react';
import iconZapa from '../Images/icono2.png';
import style from '../Style/styleConstant.js'

const Navbar = () => {
    return (
        <Box>
            <Flex sx={style.navbarStyles} >
                <Flex ml="3em" alignItems='center'>
                    <Box sx={style.fbIcon}
                    >
                        <img src={iconZapa} alt="Facebook Icon" />
                    </Box>

                    <Text ml="2em" fontSize='30px' sx={style.letraRara} >El-Shoes</Text>

                </Flex>

                <Flex alignItems="center">
                    <Button alignItems="center" mr="2em"  >
                        <FaBars style={{ fontSize: '1.5rem' }} />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

export { Navbar };