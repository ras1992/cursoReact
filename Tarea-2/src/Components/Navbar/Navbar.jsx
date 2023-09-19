import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, Link, Spacer, WrapItem, Button, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import style from './NavbarStyles'

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <ChakraProvider>

                <Box sx={style.body}>
                    <Stack direction="row" spacing="4" align="center" ml="2vh" display={{ base: 'flex', lg: 'none' }}>

                        <Link href="#" style={style.linksMenu} sx={{ color: 'white', fontWeight: 'bold', ml: '1vh', fontSize: '20', display: 'flex', alignItems: 'center' }}>
                            <img src='vite.svg' alt='Logo' style={{ marginRight: '0.5rem' }} />
                            FORSTR
                        </Link>
                        <Spacer />
                        <Button onClick={toggleDrawer} variant="outline" colorScheme="red" size="sm"
                            sx={{
                                borderRadius: 30,
                                mr: '3vh',
                                _hover: {
                                    color: 'white',
                                    bg: 'red.800',
                                    borderBlockColor: 'red',
                                    borderColor: 'red'
                                },
                            }}>
                            Menú
                        </Button>
                    </Stack>

                    <Flex pt="1vh" ml="10vh" alignItems="center" textAlign='' display={{ base: 'none', lg: 'flex' }}
                    >
                        <Link href="#" sx={{ color: 'white', fontWeight: 'bold', fontSize: '20' }} style={style.links}>
                        <Flex>    
                            <img src='vite.svg'></img>
                            FORSTR
                        </Flex>
                            
                        </Link>
                        <Spacer />
                        <Flex ml='-30'>
                            <Link href="#" sx={style.links} >
                                HOME
                            </Link>
                            <Link href="#" sx={style.links}>
                                SERVICES
                            </Link>
                            <Link href="#" sx={style.links}>
                                PORFOLIO
                            </Link>
                            <Link href="#" sx={style.links}>
                                RESUME
                            </Link>
                            <Link href="#" sx={style.links}>
                                CONTACT
                            </Link>
                        </Flex>
                        <Spacer />
                        <WrapItem>
                            <Button backgroundColor="#d03049" sx={{ borderRadius: 30, mr: '10vh' }} color='white'>DOWNLOAD CV</Button>
                        </WrapItem>
                    </Flex>
                </Box>


                <Drawer placement="right" onClose={toggleDrawer} isOpen={isDrawerOpen}>
                    <DrawerOverlay />
                    <DrawerContent sx={style.menu}>
                        <DrawerCloseButton sx={{

                            color: '#d03049',
                            fontWeight: 'bold',

                        }} />
                        <DrawerHeader color='White'>Menú</DrawerHeader>
                        <DrawerBody>
                            <VStack spacing={4}>
                                <Link href="#" sx={style.linksMenu}>
                                    HOME
                                </Link>
                                <Link href="#" sx={style.linksMenu}>
                                    SERVICES
                                </Link>
                                <Link href="#" sx={style.linksMenu}>
                                    PORFOLIO
                                </Link>
                                <Link href="#" sx={style.linksMenu}>
                                    RESUME
                                </Link>
                                <Link href="#" sx={style.linksMenu}>
                                    CONTACT
                                </Link>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </ChakraProvider>
        </>
    )
}

export { Navbar }
