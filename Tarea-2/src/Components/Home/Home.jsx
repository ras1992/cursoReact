import React from 'react';
import style from './HomeStyle'
import { ChakraProvider, Box, Text, Flex, Image, HStack } from '@chakra-ui/react'

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
                    <Flex justify="space-between" flexDirection="row">

                        <Box sx={{ pt: '10vh', pl: '5vh', alignItems: 'center', flexGrow: 1, w: '45em', h: '65vh', }}>
                            <Text color='white'>
                                <h4>Hello, <Text color='red' as='span'> I´m </Text></h4>
                                <Text as='h1' sx={{ fontWeight: 'bold', fontSize: '60' }}>Kthan Foster</Text>
                                <Text as='h3' >Web Designer And Web Developer</Text>
                                <Text as='p' mt='2vh' color='#bac5d5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab exercitationem dolorum minima quas quidem quibusdam iste quaerat molestias temporibus, est itaque nostrum quod asperiores ullam magni possimus. Nobis, esse animi?</Text>
                                <Text as='p' mt='6vh'>FIND ME ON</Text>

                                <HStack spacing={2}>
                                    <Icono src="Images/Social/icons8-facebook-f.svg" />
                                    <Icono src="Images/Social/icons8-twitter.svg" />
                                    <Icono src="Images/Social/icons8-linkedin.svg" />
                                    <Icono src="Images/Social/icons8-youtube-play.svg" />
                                </HStack>

                                <HStack spacing='5em'>
                                    <Box>
                                        <Text as='p' mt='4vh' sx={{ fontSize: '30' }}>{yearsExp}+</Text>
                                        <Text as='p' mt='1px' color='#bac5d5' fontSize= '10'>YEARS OF EXPERIENCE</Text>
                                    </Box>
                                    <Box>
                                        <Text as='p' mt='4vh' sx={{ fontSize: '30' }}>{globalClient}+</Text>
                                        <Text as='p' mt='1px' color='#bac5d5' fontSize= '10'>GLOBAL WORKING CLIENT</Text>
                                    </Box>
                                    <Box>
                                        <Text as='p' mt='4vh' sx={{ fontSize: '30' }}>{awardsWins}+</Text>
                                        <Text as='p' mt='1px' color='#bac5d5' fontSize= '10'>AWARDS WIN</Text>
                                    </Box>
            
                                </HStack>





                            </Text>
                        </Box>

                        <Box sx={{ pt: '20vh', pl: '5vh', mr: '5vh', alignItems: 'center', flexGrow: 1.5 }}>
                            <Flex justify="center" align="center" w="100%" h="100%">
                                <Box sx={{ bgColor: '#1d1c21', borderRadius: '15px', position: 'relative', maxW: '29em', w: '29em', h: '34em' }}>
                                    <Image src='Images/perfil2.png' alt='Perfil' position='relative' w='550' h='700' top={-40} left={5} zIndex={1} filter='auto' brightness='90%' contrast='120%' />
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>

                </Box>
            </ChakraProvider>
        </>

    )
}

export { Home }
