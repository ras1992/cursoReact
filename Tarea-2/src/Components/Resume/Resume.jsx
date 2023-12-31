import { React, useState, useEffect } from 'react';
import style from './ResumeStyle';
import { ChakraProvider, Box, Text, Flex, Center, Button, Image } from '@chakra-ui/react';
import translations from '../Languages/Translations';

const Resume = ({ currentLanguage }) => {

    const [cardServiceEd, setCardServiceEd] = useState([]);

    useEffect(() => {
        try {
            fetch('Json/Data.json')
                .then(response => response.json())
                .then(data => setCardServiceEd(data[currentLanguage]['resumeEducation']))
        } catch (error) {
            console.error('Error fetching data:', error)
        }

    }, [currentLanguage]);

    console.log(cardServiceEd)

    const [cardServiceEx, setCardServiceEx] = useState([]);

    useEffect(() => {
        try {
            fetch('Json/Data.json')
                .then(response => response.json())
                .then(data => setCardServiceEx(data[currentLanguage]['resumeExperience']))

        } catch (error) {
            console.error('Error fetching data:', error)
        }

    }, [currentLanguage]);

    console.log(cardServiceEx)

    return (
        <>
            <ChakraProvider>
                <section id="Resume">
                    <Flex sx={style.body} flexDirection='column' >
                        <Flex align="center" flexDirection="column" textAlign="center" mb="4vh">
                            <Text color='red' fontSize="md">{translations[currentLanguage]['YEARS OF EXPERIENCE']}</Text>
                            <Text as="h1" fontWeight="bold" color='white' fontSize={{ base: '40', md: '60' }}>{translations[currentLanguage]['My Resume']}</Text>
                        </Flex>
                        <Box >
                            <Flex flexDirection={{ base: 'column', md: 'row' }} paddingX={4} pb='5em'>
                                {/* Columna Roja */}

                                <Flex flexDirection="column" flex="1" p={4}>
                                    <Flex align="left" flexDirection="column" textAlign="left" mb="4vh" ml='.1em' >
                                        <Text as='h2' color='WHITE' >{translations[currentLanguage]['Job Experience']}</Text>
                                        <Text color='red' fontSize="15">{translations[currentLanguage]['totalDateExperience']}</Text>
                                    </Flex>
                                    {cardServiceEx.map((card, index) => (
                                        <Flex key={index} alignItems='stretch'>
                                            {index >= 0 &&
                                                <Flex bg='black' flexDirection="column" mr={4}>
                                                    <Box style={{
                                                        width: '3px',
                                                        height: '100%',
                                                        background: '#171818',
                                                    }}>

                                                        <Box style={style.cardLineB1}>
                                                            <Box style={style.cardLineB2}></Box>
                                                        </Box>
                                                    </Box>


                                                </Flex>
                                            }
                                            <Box
                                                key={index}
                                                p="10"
                                                mb={index === cardServiceEx.length - 1 ? '0' : '2vh'}
                                                sx={style.cardData}
                                            >
                                                <Text fontSize={{ base: '20', md: '25' }} color={(card.name) === 'Desempleado' || (card.name) === 'Unemployed' ? 'red.400' : 'white'} mt='-1.5vh' >
                                                    {card.name}
                                                </Text>
                                                <Text color="#71777c" fontSize="18px">
                                                    {card.company} ( {card.date} )
                                                </Text>
                                                <Text color="#71777c" fontSize="15px">
                                                    {card.details}
                                                </Text>
                                                <Text mt='-1em' fontSize="xl" color={(card.status) === 'Freelancer' ? 'green.300' : 'orange.300'}>
                                                    {card.status}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Flex>


                                {/* Columna Verde */}
                                <Flex flexDirection="column" flex="1" p={4}>
                                    <Flex align="left" flexDirection="column" textAlign="left" mb="4vh" ml='.1em'>
                                        <Text as='h2' color='WHITE' >{translations[currentLanguage]['Education Quality']}</Text>
                                        <Text color='red' fontSize="15">{translations[currentLanguage]['dateTotalEducation']}</Text>
                                    </Flex>
                                    {cardServiceEd.map((card, index) => (
                                        <Flex key={index} alignItems='stretch'>
                                            {index >= 0 &&
                                                <Flex bg='black' alignItems="center" flexDirection="column" mr={4}>
                                                    <Box style={{
                                                        width: '3px',
                                                        height: '100%',
                                                        background: '#171818',
                                                    }}>
                                                        <Box style={style.cardLineB1}>
                                                            <Box style={style.cardLineB2}></Box>
                                                        </Box>
                                                    </Box>
                                                </Flex>
                                            }
                                            <Box
                                                key={index}
                                                mb={index === cardServiceEd.length - 1 ? '0' : '2vh'}
                                                sx={style.cardData2}
                                            >
                                                <Text fontSize={{ base: '20', md: '25' }} color="white" mt='-1.5vh'>
                                                    {card.name}
                                                </Text>
                                                <Text color="#71777c" mt='-1.2em' fontSize="15px">
                                                    {card.study} ({card.date})
                                                </Text>
                                                <Text color="#71777c" fontSize="15px">
                                                    {card.modality}
                                                </Text>
                                                <Text mt='-1em' fontSize="xl" color={(card.status) === 'Graduado' || (card.status) === 'Graduated' ? 'green.300' : (card.status) === 'Abandonado' || (card.status) === 'Dropped Out' ? 'red.400' : 'orange.300'}>
                                                    {card.status}
                                                </Text>
                                            </Box>
                                        </Flex>
                                    ))}
                                </Flex>
                            </Flex>
                        </Box>

                    </Flex>
                </section>
            </ChakraProvider>

        </>
    )
}

export { Resume }
