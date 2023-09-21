import React from 'react'; // Importa React para crear componentes

import style from './FooterStyle'; // Importa los estilos desde un archivo externo

import { ChakraProvider, Box, Text, Flex, Image, HStack } from '@chakra-ui/react'; // Importa componentes de Chakra UI


import perfil from '../Images/perfil2.png'; // Importa la imagen de perfil
import facebook from '../Images/Social/icons8-facebook-f.svg'; // Importa ícono de Facebook
import twitter from '../Images/Social/icons8-twitter.svg'; // Importa ícono de Twitter
import linkedin from '../Images/Social/icons8-linkedin.svg'; // Importa ícono de LinkedIn
import youtube from '../Images/Social/icons8-youtube-play.svg'; // Importa ícono de YouTube


const Footer = () => {
    const fechaActual = new Date();
    const año = fechaActual.getFullYear();

    const Icono = ({ src }) => {
        return (
            <Box
                bg="#1d1e24" // Fondo negro
                borderRadius="md" // Borde redondeado
                p={3} // Relleno interno
                mx={1} // Margen horizontal
                display="inline-block" // Mostrar en línea
            >
                <img src={src} alt="Icono" width={20} height={10} /> {/* Muestra la imagen */}
            </Box>
        );
    }
    return (
        <>
            <ChakraProvider>
                <Box sx={style.body} textAlign='center' alignItems='center'>
                    
                    <Text justifyContent="center" sx={{ color: 'white', fontWeight: 'bold', ml: '1vh', fontSize: '20', display: 'flex', alignItems: 'center' }}>
                            <img src='vite.svg' alt='Logo' style={{ marginRight: '0.5rem' }} />
                            FORSTR
                        </Text>
                    <HStack spacing={2} justifyContent="center">
                        <Icono src={facebook} /> 
                        <Icono src={twitter} /> 
                        <Icono src={linkedin} /> 
                        <Icono src={youtube} /> 
                        <Icono src={linkedin} /> 
                        <Icono src={youtube} /> 
                    </HStack>
                    <Text mt='10' color='white'> Fotstr @ <span>{año}</span> All Rights Reserved By PixelMove</Text>
                </Box>
                
            </ChakraProvider>
        </>
    )
}

export { Footer }