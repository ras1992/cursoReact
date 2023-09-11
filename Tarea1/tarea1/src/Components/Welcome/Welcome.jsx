import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import patas from '../Images/patas3.png';
import style from '../Style/styleConstant.js'

const Welcome = () => {
    return (
        <Box sx={{ ...style.boxStart, ...style.standard, h: '100vh', }}>
            <div>
                <Box>

                    <Text sx={{ ...style.showesTitle, mb: '1' }}>Welcome to El-Showes</Text>
                    <Text sx={{ ...style.showesSubtitle, mt: '1' }}>For a better experience with your shoes!</Text>

                </Box>

                <Box>
                    <img src={patas} alt="Mi Imagen" style={style.imgPata} />
                </Box>
                
            </div>
        </Box>
    )
}

export { Welcome }