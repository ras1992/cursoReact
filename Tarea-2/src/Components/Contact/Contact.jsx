import { React, useState, useEffect } from 'react'; // Importa React, useState y useEffect desde React
import style from './ContactStyle'; // Importa los estilos desde un archivo externo
import { ChakraProvider, Box, Text, Flex, Center, Button, Image, FormControl, Input } from '@chakra-ui/react'; // Importa componentes de Chakra UI
import { Line } from '../Line/Line'; // Importa el componente personalizado Line

const Contact = () => {

    const [cardService, setCardService] = useState([]); // Define un estado para almacenar la información de las tarjetas de trabajo

    useEffect(() => {
        try {
            // Realiza una solicitud fetch para obtener datos desde 'Json/Data.json'
            fetch('Json/Data.json')
                .then(response => response.json()) // Convierte la respuesta a formato JSON
                .then(data => setCardService(data.contact)) // Almacena los datos de trabajo en el estado

        } catch (error) {
            console.error('Error fetching data:', error) // Manejo de errores en caso de falla en la solicitud
        }

    }, []);

    console.log(cardService) // Muestra en la consola la información de las tarjetas de trabajo

    return (
        <>
            <ChakraProvider>
                {/* Proveedor de Chakra UI para estilos */}
                <Flex sx={style.body} pt={{ base: '5em', md: '5em' }} pl={{ base: '3vw', md: '5vw' }} pr={{ base: '3vw', md: '5vw' }} flexDirection='column' >
                    <Flex align="center" flexDirection="column" textAlign="center" mb="4vh">
                        <Text color='red' fontSize="md">YEARS OF EXPERIENCE</Text>
                        <Text as="h1" fontWeight="bold" color='white' fontSize="60">My Resume</Text>
                    </Flex>

                    <Flex justifyContent="space-between">
                        {/* Columna Roja */}

                        <Flex flexDirection="column" bg='red' flex="0.5" >

                            {cardService.map((card, index) => (
                                <Box
                                    key={index}
                                    p="1em"
                                    mb='1.5em'
                                    minW='20vw'
                                    bg="red"
                                    borderColor="#21282b"
                                    borderRadius="10px"
                                    overflow="hidden"
                                    filter="blur(0.5px)"
                                    boxShadow="4px 4px 8px rgba(0, 0, 0, 0.5)"
                                    style={{
                                        background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column', // Centra verticalmente
                                        justifyContent: 'center', // Centra horizontalmente
                                        height: '8em', // Modifica la altura aquí
                                        width: '20em',
                                    }}
                                >
                                    <Image src={card.icon} w='2em' h='2em' mx="auto" my="auto"></Image>
                                    <Text x="auto" my="auto" color='white'>{card.name}</Text>
                                </Box>
                            ))}
                        </Flex>


                        {/* Columna Verde */}
                        <Flex
                            flexDirection='column' // Cambia la dirección de la flexión en pantallas más grandes
                            bg='green'
                            borderRadius="10px"
                            p={9}
                            pt={12}

                            ml='1.5em'
                            w='100%'


                            overflow="hidden"
                            style={{
                                background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
                                boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.5)",
                                display: 'flex',
                                justifyContent: 'center', // Centra horizontalmente
                            }}
                        >
                            <Box

                                flexDirection={{ base: 'column', md: 'row' }}
                                style={{
                                    background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
                                    display: 'flex',
                                    justifyContent: 'center', // Centra horizontalmente
                                }}
                            >
                                <FormControl mb={{ base: '1em', md: '0em' }} >
                                    <Input
                                        color='white'
                                        bg='#171818'
                                        alignContent='center'
                                        borderColor='#171818'
                                        type="text"
                                        placeholder="Name"
                                        sx={{
                                            ...style.textPlaceholder,

                                            '&:hover': {
                                                borderColor: '#303134', // Cambia el color de borde en hover
                                            },
                                            '&:focus': {
                                                outline: 'none !important', // Elimina el resaltado al hacer clic
                                                borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                boxShadow: 'none', // Elimina la sombra en foco
                                            },
                                        }}
                                    />
                                </FormControl>
                                <FormControl ml={{ base: '0', md: '1.5em' }} mb={{ base: '0.5em', md: '1.2em' }}>
                                    <Input
                                        color='white'
                                        bg='#171818'
                                        alignContent='center'
                                        borderColor='#171818'
                                        type="number"
                                        placeholder="Phone"
                                        sx={{
                                            ...style.textPlaceholder,

                                            '&:hover': {
                                                borderColor: '#303134', // Cambia el color de borde en hover
                                            },
                                            '&:focus': {
                                                outline: 'none !important', // Elimina el resaltado al hacer clic
                                                borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                boxShadow: 'none', // Elimina la sombra en foco
                                            },
                                        }}
                                    />
                                </FormControl>
                            </Box>

                            <Box

                                flexDirection={{ base: 'column', md: 'row' }}
                                style={{
                                    background: 'linear-gradient(140deg, #21282b, #1b1b1c)',
                                    display: 'flex',
                                    justifyContent: 'center', // Centra horizontalmente
                                }}
                            >
                                <FormControl mb={{ base: '1em', md: '0em' }}>
                                    <Input
                                        color='white'
                                        bg='#171818'
                                        alignContent='center'
                                        borderColor='#171818'
                                        type="email"
                                        placeholder="Email"
                                        sx={{
                                            ...style.textPlaceholder,

                                            '&:hover': {
                                                borderColor: '#303134', // Cambia el color de borde en hover
                                            },
                                            '&:focus': {
                                                outline: 'none !important', // Elimina el resaltado al hacer clic
                                                borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                boxShadow: 'none', // Elimina la sombra en foco
                                            },
                                        }}
                                    />
                                </FormControl>

                                <FormControl ml={{ base: '0', md: '1.5em' }} mb={{ base: '0.5em', md: '1.2em' }}>
                                    <Input
                                        color='white'
                                        bg='#171818'
                                        alignContent='center'
                                        borderColor='#171818'
                                        type="text"
                                        placeholder="Subject"
                                        sx={{
                                            ...style.textPlaceholder,

                                            '&:hover': {
                                                borderColor: '#303134', // Cambia el color de borde en hover
                                            },
                                            '&:focus': {
                                                outline: 'none !important', // Elimina el resaltado al hacer clic
                                                borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                boxShadow: 'none', // Elimina la sombra en foco
                                            },
                                        }}
                                    />
                                </FormControl>
                            </Box>

                            <Box
                                bg='red'
                                style={{
                                    background: 'linear-gradient(140deg, #21282b, #1b1b1c)',

                                    display: 'flex',
                                    height: '100%', // Altura al 100%
                                    width: '100%'
                                }}
                            >
                                <FormControl sx={{ width: '100%' }}>
                                    <Input
                                        bg='#171818'

                                        borderColor='#171818'
                                        color='white'
                                        type="message"
                                        placeholder="Message"
                                        textAlign='left' // Alinea el texto a la izquierda
                                        alignItems=' !important' // Alinea el contenido arriba a la izquierda
                                        sx={{
                                            ...style.textPlaceholder,
                                            width: '100%', // Ancho al 100%
                                            height: '100%', // Altura al 100%
                                            '&:hover': {
                                                borderColor: '#303134', // Cambia el color de fondo en hover
                                            },
                                            '&:focus': {
                                                outline: 'none !important', // Elimina el resaltado al hacer clic
                                                borderColor: '#303134', // Puedes ajustar el color del borde en foco
                                                boxShadow: 'none', // Elimina la sombra en foco
                                            },
                                        }}
                                    />
                                </FormControl>
                            </Box>
                        </Flex>


                    </Flex>

                </Flex>

            </ChakraProvider>
        </>
    )
}

export { Contact }
