import React from 'react';
import style from './ServicesStyle'
import { ChakraProvider, Box, Text, Flex } from '@chakra-ui/react'

const Services = () => {
    return (
        <>
            <ChakraProvider>
                <Flex sx={style.body} pt={{ base: '5vh', md: '5vh' }} pl={{ base: '4vh', md: '10vh' }}>
                    <Text
                        flexGrow={{ base: 1, md: 1 }}
                        width={{ base: '100%', md: '45em' }}
                        alignItems="center"

                    >
                        <Text color='red' fontSize="md">MY SERVICES</Text>
                        <Text as="h1" fontWeight="bold" color='white' fontSize="60">What I Do</Text>
                    </Text>
                </Flex>

                <Flex>
                    <Box
                        bgColor="#1d1c21"
                        borderRadius="15px"
                        position="relative"
                        maxW={{ base: '29em', md: '29em' }}  // Hacer que el ancho máximo sea el 100% en pantallas pequeñas
                        w="100%"  // Hacer que el ancho sea el 100% en pantallas pequeñas
                        h={{ base: '34em', md: '34em' }}  // Ajustar la altura en pantallas grandes
                        maxHeight={{ base: '34em', md: 'none' }}  // Limitar la altura en pantallas pequeñas
                    >
                            hola
                    </Box>
                </Flex>

            </ChakraProvider>

        </>
    )
}

export { Services }
