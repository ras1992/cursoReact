import { React, useState, useEffect } from 'react'; // Importa React, useState y useEffect desde React
import style from './ResumeStyle'; // Importa los estilos desde un archivo externo
import { ChakraProvider, Box, Text, Flex, Center, Button, Image } from '@chakra-ui/react'; // Importa componentes de Chakra UI
import { Line } from '../Line/Line'; // Importa el componente personalizado Line

const Resume = () => {

    const [cardServiceEd, setCardServiceEd] = useState([]); // Define un estado para almacenar la información de las tarjetas de trabajo

    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json()) // Convierte la respuesta a formato JSON
                .then(data => setCardServiceEd(data.resumeEducation)) // Almacena los datos de trabajo en el estado

        } catch (error) {
            console.error('Error fetching data:', error) // Manejo de errores en caso de falla en la solicitud
        }

    }, []);

    console.log(cardServiceEd) // Muestra en la consola la información de las tarjetas de trabajo

    const [cardServiceEx, setCardServiceEx] = useState([]); // Define un estado para almacenar la información de las tarjetas de trabajo

    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json()) // Convierte la respuesta a formato JSON
                .then(data => setCardServiceEx(data.resumeExperience)) // Almacena los datos de trabajo en el estado

        } catch (error) {
            console.error('Error fetching data:', error) // Manejo de errores en caso de falla en la solicitud
        }

    }, []);

    console.log(cardServiceEx) // Muestra en la consola la información de las tarjetas de trabajo

    return (
        <>
            <ChakraProvider>
                {/* Proveedor de Chakra UI para estilos */}
                <Flex sx={style.body} pt={{ base: '5em', md: '5em' }} pl={{ base: '3vw', md: '5vw' }} pr={{ base: '3vw', md: '5vw' }} flexDirection='column' >
                    <Flex align="center" flexDirection="column" textAlign="center" mb="4vh">
                        <Text color='red' fontSize="md">YEARS OF EXPERIENCE</Text>
                        <Text as="h1" fontWeight="bold" color='white' fontSize="60">My Resume</Text>
                    </Flex>

                    <Flex justifyContent="space-between" paddingX={4}  pb='5em'>
                        {/* Columna Roja */}
                        
                        <Flex flexDirection="column" flex="1" bg='red' p={4} pl={{ base: '3vw', md: '5vw' }}>
                            <Flex align="left" flexDirection="column" textAlign="left" mb="4vh" ml='-1em'>
                                <Text as='h2' color='WHITE' >Job Experience</Text>
                                <Text  color='white' fontSize="15">2010 - 2022</Text>
                            </Flex>
                            {cardServiceEx.map((card, index) => (
                                <Box
                                    key={index} // Clave única para cada tarjeta
                                    p="10" // Relleno interno
                                    mb="2vh" // Margen inferior
                                    bg="red" // Fondo rojo
                                    minWidth="100%" // Ancho mínimo
                                    borderColor="#21282b" // Color del borde
                                    borderRadius="10px" // Borde redondeado
                                    overflow="hidden" // Controla el desbordamiento del contenido
                                    filter="blur(0.5px)" // Aplica un filtro de desenfoque
                                    boxShadow="4px 4px 8px rgba(0, 0, 0, 0.2)" // Sombra de la tarjeta
                                    style={{
                                        background: 'linear-gradient(140deg, #21282b, #1b1b1c)', // Cambia los colores según tus preferencias con gradiente
                                    }}
                                >
                                    <Text fontSize="4xl" color="white" mt='1vh'>
                                        {card.name}
                                    </Text>
                                    <Text color="#71777c" mt='-1.2em' fontSize="15px">
                                        {card.study} ({card.date})
                                    </Text>
                                    <Text color="#bac5d5" mt='1em' fontSize="xl">
                                        {card.detail}
                                    </Text>
                                </Box>
                            ))}
                        </Flex>


                        {/* Columna Verde */}
                        <Flex flexDirection="column" flex="1" bg='green' p={4} pl={{ base: '3vw', md: '5vw' }}>
                            <Flex align="left" flexDirection="column" textAlign="left" mb="4vh" ml='-1em'>
                                <Text as='h2' color='WHITE' >Education Quality</Text>
                                <Text color='white' fontSize="15">2010 - 2022</Text>
                            </Flex>
                            {cardServiceEd.map((card, index) => (
                                <Box
                                    key={index} // Clave única para cada tarjeta
                                    p="10" // Relleno interno
                                    mb="2vh" // Margen inferior
                                    bg="red" // Fondo rojo
                                    minWidth="100%" // Ancho mínimo
                                    borderColor="#21282b" // Color del borde
                                    borderRadius="10px" // Borde redondeado
                                    overflow="hidden" // Controla el desbordamiento del contenido
                                    filter="blur(0.5px)" // Aplica un filtro de desenfoque
                                    boxShadow="4px 4px 8px rgba(0, 0, 0, 0.2)" // Sombra de la tarjeta
                                    style={{
                                        background: 'linear-gradient(140deg, #21282b, #1b1b1c)', // Cambia los colores según tus preferencias con gradiente
                                    }}
                                >
                                    <Text fontSize="4xl" color="white" mt='1vh'>
                                        {card.name}
                                    </Text>
                                    <Text color="#71777c" mt='-1.2em' fontSize="15px">
                                        {card.study} ({card.date})
                                    </Text>
                                    <Text color="#bac5d5" mt='1em' fontSize="xl">
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

export { Resume }
