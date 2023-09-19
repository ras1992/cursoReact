import { React, useState, useEffect } from 'react';
import style from './ServicesStyle'
import { ChakraProvider, Box, Text, Flex, Center, Button, Image } from '@chakra-ui/react'


const Services = () => {

    const [cardService, setCardService] = useState([]);
   
    useEffect(() => {
        try {
  
          fetch('Json/Services.json')
          .then(response=>response.json())
          .then(data=>setCardService(data.services))

  
        } catch (error) {
          console.error('Error fetching data:', error)
        }
  
    }, []);

    console.log(cardService)

    return (
        <>
            <ChakraProvider>
                <Flex sx={style.body} pt={{ base: '5vh', md: '5vh' }} pl={{ base: '4vh', md: '10vh' }} flexDirection='column'>
                    <Box>
                        <Text
                            flexGrow={{ base: 1, md: 1 }}
                            width={{ base: '100%', md: '45em' }}
                            alignItems="center">
                            <Text color='red' fontSize="md">MY SERVICES</Text>
                            <Text as="h1" fontWeight="bold" color='white' fontSize="60">What I Do</Text>
                        </Text>
                    </Box>

                    <Flex flexDirection="column" alignItems="left">
                        <Flex flexWrap="wrap" justifyContent="left">
                            {cardService.map((card, index) => (
                                <Box
                                    key={index}
                                    p="10"
                                    flex="0 0 calc(31% - 16px)" // Calcula el ancho de cada tarjeta para 3 por fila con margen
                                    m="8px"
                                    bg="red"
                                    borderColor="#21282b"
                                    borderRadius="10px"
                                    overflow="hidden"
                                    filter="blur(0.5px)"
                                    boxShadow="4px 4px 8px rgba(0, 0, 0, 0.2)"
                                    mb="16px"
                                    style={{
                                        background: 'linear-gradient(140deg, #21282b, #1b1b1c)', // Cambia los colores según tus preferencias
                                    }}
                                >   
                                    <Image src={card.icon} w='50px' h='40px'></Image>
                                    <Text fontSize="lg" color="red">
                                        {card.name}
                                    </Text>
                                    <Text fontWeight="bold" fontSize="xl">
                                        {card.detail}
                                    </Text>
                                </Box>
                            ))}
                        </Flex>
                        

                    </Flex>
                    
                    


                </Flex>
            </ChakraProvider>

        </>
    )
}

export { Services }
