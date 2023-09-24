import React from 'react'; // Importa React para crear componentes

import style from './FooterStyle'; // Importa los estilos desde un archivo externo

import { ChakraProvider, Box, Text, Flex, Image, Link, HStack } from '@chakra-ui/react'; // Importa componentes de Chakra UI

import linkedin from '../Images/Social/icons8-linkedin.svg'; // Importa ícono de LinkedIn
import gmail from '../Images/Social/icons8-gmail.svg'; // Importa ícono de YouTube
import github from '../Images/Social/icons8-github 2.svg';

import translations from '../Languages/Translations';

const Footer = ({ currentLanguage }) => {
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


    // Crea la URL para abrir una nueva ventana de redacción de correo en Gmail
    const emailLink = `https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdjtdrPjjfMlrrQXlflXwSqKpTrNBGGMVdHTNvkDhgLWQsPpvVPCbHZDsKmHnwccxJRzL`;
    
    const handleClick = () => {
        // Abre la URL en una nueva ventana o pestaña del navegador
        window.open(emailLink);
    };


    return (
        <>
            <ChakraProvider>
                <Box sx={style.body} textAlign='center' alignItems='center' pt='10'>

                    <Text justifyContent="center" sx={{ color: 'white', fontWeight: 'bold', ml: '1vh', fontSize: '20', display: 'flex', alignItems: 'center' }}>
                        <img src='vite.svg' alt='Logo' style={{ marginRight: '0.5rem' }} />
                        {translations[currentLanguage]['FORSTR']}
                    </Text>
                    <HStack spacing={2} justifyContent="center">
                        <Link onClick={handleClick}>
                            <Icono src={gmail} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ramiro-kuspita-969014151" target="_blank">
                            <Icono src={linkedin} />
                        </Link>
                        <Link href="https://github.com/ras1992" target="_blank">
                            <Icono src={github} />
                        </Link>
                    </HStack>
                    <Text mt='10' color='white'> Fotstr @ <span>{año}</span> {translations[currentLanguage]['All Rights Reserved By PixelMove']}</Text>
                </Box>

            </ChakraProvider>
        </>
    )
}

export { Footer }
