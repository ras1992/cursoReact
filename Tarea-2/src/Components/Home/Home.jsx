import React from 'react';
import style from './HomeStyle'
import { ChakraProvider, Box, Text, Flex, Image, HStack } from '@chakra-ui/react'
import { Line } from '../Line/Line';
import perfil from '../Images/perfil2.png'
import facebook from '../Images/Social/icons8-facebook-f.svg'
import twitter from '../Images/Social/icons8-twitter.svg'
import linkedin from '../Images/Social/icons8-linkedin.svg'
import youtube from '../Images/Social/icons8-youtube-play.svg'

const Home = () => {
    const yearsExp = 20
    const globalClient = 700
    const awardsWins = 30

    const Icono = ({ src }) => {
        return (
            <Box
                bg="#1d1e24"        // Color gris oscuro
                borderRadius="md"    // Bordes redondeados
                p={3}                // Espacio interno (padding)
                mx={1}               // Margen horizontal (opcional)
                display="inline-block" // Para que los iconos estén en línea
            >
                <img src={src} alt="Icono" width={20} height={10} />
            </Box>
        );
    }

    return (
        <>
            <ChakraProvider>
                <Box sx={style.body}>
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        alignItems="center"
                        justifyContent="space-between"
                        pl={{ base: '5vh', md: '10vh' }}
                        pr={{ base: '5vh', md: '10vh' }}
                        pt={{ base: '5vh', md: '10vh' }}
                    >
                        <Flex
                            flexGrow={{ base: 1, md: 1 }}
                            width={{ base: '100%', md: '45em' }}
                            alignItems="center"
                            pr={{ base: '2vw', md: '6vw' }} 
                        >
                            <Text color="white">
                                <h4>
                                    Hello, <Text color="#d03049" as="span"> I´m </Text>
                                </h4>
                                <Text as="h1" fontWeight="bold" fontSize="60">
                                    Kthan Foster
                                </Text>
                                <Text as="h3">Web Designer And Web Developer</Text>
                                <Text mt="2vh" color="#bac5d5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                                    exercitationem dolorum minima quas quidem quibusdam iste quaerat
                                    molestias temporibus, est itaque nostrum quod asperiores ullam
                                    magni possimus. Nobis, esse animi?
                                </Text>
                                <Text mt="6vh">FIND ME ON</Text>

                                <HStack spacing={2}>
                                    <Icono src={facebook} />
                                    <Icono src={twitter} />
                                    <Icono src={linkedin} />
                                    <Icono src={youtube} />
                                </HStack>

                                <HStack spacing={{ base: "1em", md: "3em" }} pt={{ base: "1em", md: "3em" }}>
                                    <Box>
                                        <Text fontSize={{ base: "xl", md: "3xl" }}>
                                            {yearsExp}+
                                        </Text>
                                        <Text mt="1px" color="#bac5d5" fontSize="md">
                                            YEARS OF EXPERIENCE
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={{ base: "xl", md: "3xl" }}>
                                            {globalClient}+
                                        </Text>
                                        <Text mt="1px" color="#bac5d5" fontSize="md">
                                            GLOBAL WORKING CLIENT
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize={{ base: "xl", md: "3xl" }}>
                                            {awardsWins}+
                                        </Text>
                                        <Text mt="1px" color="#bac5d5" fontSize="md">
                                            AWARDS WIN
                                        </Text>
                                    </Box>
                                </HStack>
                            </Text>
                        </Flex>

                        <Box
                            flexGrow={{ base: 1.5, md: 0 }}
                            alignItems="center"
                            justifySelf="center"
                            pt={{ base: '20vh', md: '20vh' }}
                            
                     >
                            <Box
                                >
                                <Box
                                    bgColor="#1b1b26"
                                    borderRadius="15px"
                                    position="relative"
                                    maxW={{ base: '39em', md: '39em' }}  // Hacer que el ancho máximo sea el 100% en pantallas pequeñas
                                    w="100%"  // Hacer que el ancho sea el 100% en pantallas pequeñas
                                    h={{ base: '34em', md: '34em' }}  // Ajustar la altura en pantallas grandes
                                    maxHeight={{ base: '34em', md: 'none' }}  // Limitar la altura en pantallas pequeñas
                                >
                                    <Image
                                        src={perfil}
                                        alt="Perfil"
                                        position="relative"
                                        pl={{ base: '1vh', md: '1vw' }}
                                        pr={{ base: '1vh', md: '1vw' }}
                                        w="100%"
                                        h="700" 
                                        top={{ base: '-10em', md: '-10em' }}
                                        left="0"
                                        zIndex={1}
                                        filter="auto"
                                        brightness="90%"
                                        contrast="120%"
                                    />
                                </Box>
                            </Box>
                        </Box>


                    </Flex>
                    <Flex pt={{ base: '2em', md: '4em' }} pl={{ base: '5vh', md: '10vh' }} pr={{ base: '5vh', md: '10vh' }}>
                        <Line></Line>
                    </Flex>

                </Box>
            </ChakraProvider>
        </>
    )
}

export { Home }
