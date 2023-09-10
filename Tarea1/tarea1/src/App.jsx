import { Box, Flex, Text, Input, Button, Divider, Stack, FormControl, FormErrorMessage} from '@chakra-ui/react';
import { FaGoogle, FaBars } from 'react-icons/fa'; // Replace 'fa' with the correct FontAwesome library

// import React, { useState } from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import './App.css';
import patas from './Components/Images/patas3.png';
import iconFace from './Components/Images/iconFace.png';
import iconZapa from './Components/Images/icono2.png';

function App() {
  const letraRara = {
    fontFamily: 'Lobster Two, cursive',
  };

  const boxStart = {
    w: '30em',
    h: '65vh',
    bg: "#dedede",
    flexGrow: 1,
  };

  const boxEnd = {
    w: '45em',
    h: '65vh',
    bg: "#f4f4f4",
    flexGrow: 1.5,
  };

  const standard ={
    display: 'flex',
    alignItems: 'center', // Centra verticalmente el contenido
    justifyContent: 'center',
    fontFamily:'roboto',
  }

  const showesTitle={
    marginLeft:'1em',
    fontSize:'35px',
    fontWeight:'bold',
    color:'blue.500',
  }

  const showesSubtitle={
    marginLeft:'1.5em',
    fontSize:'22px',
    color:'grey',
  }

  // function errorMessageExample() {
  //   const [input, setInput] = useState('')
  
  //   const handleInputChange = (e) => setInput(e.target.value)
  
  //   const isError = input === ''
  
  //   return (
  //     <FormControl isInvalid={isError}>
  //       <Input type="email" placeholder="Email or Phone" fontSize='12px' fontWeight="bold" value={input} onChange={handleInputChange} />
  //       {!isError ? (
  //         <FormHelperText>
  //           Enter the email you'd like to receive the newsletter on.
  //         </FormHelperText>
  //       ) : (
  //         <FormErrorMessage>Email is required.</FormErrorMessage>
  //       )}
  //     </FormControl>
  //   )
  // }

  const navbarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em',
  };

  return (
    <div sx={{ ...standard, h: '100vh',}}>
      <Flex as="login" justify="space-between" wrap="wrap">
        <Box sx={{ ...boxStart, ...standard, h: '100vh', }}>

          <div>
            <Box>
              <Text sx={{ ...showesTitle, mb: '1' }}>Welcome to El-Showes</Text>
              <Text sx={{ ...showesSubtitle, mt: '1' }}>For a better experience with your shoes!</Text>

            </Box>
            <Box>
              <img src={patas} alt="Mi Imagen" style={{ marginTop: '2em',maxWidth: '100%', maxHeight: '100%' }}/>
            </Box>
          </div>
          
        </Box>
        
        

        <Box sx={{ ...boxEnd, h:'100vh'}}>
          <Flex flexDirection="column">
            <Flex sx={navbarStyles} > {/* Comienza el navbar */}
              
              <Flex ml="3em" alignItems= 'center'>
                <Box
                  position="absolute"
                  width="36px"
                  height="50px"
                  borderRadius="50%"
                  backgroundColor="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <img src={iconZapa} alt="Facebook Icon" />
                </Box>

                <Text ml="2em" fontSize='30px' style={letraRara} >El-Shoes</Text>  

              </Flex>
              
              <Flex alignItems="center">
                <Button alignItems="center" mr="2em"  >
                  <FaBars style={{fontSize: '1.5rem' }} />
                </Button>
              </Flex>
            </Flex> {/*termina el navbar */}

            <ChakraProvider >
              
              <Stack spacing={4}  sx={{  my:'15vh',  ml:"15vw", mr:"35vw", minWidth: '300px', minHeight: '400px' }}>
                  <Text  fontSize='35px' fontWeight="bold" textAlign="left" mb='1em'>Sign Up</Text>

                  {/* {errorMessageExample()} */}

                  <FormControl>
                    <Input type="email" placeholder="Email or Phone" fontSize='12px' fontWeight="bold" bg='#eeeeee'/>
                  </FormControl>

                  <FormControl>
                    <Input type="text" placeholder="Full Name" fontSize='12px' fontWeight="bold" bg='#eeeeee'/>
                  </FormControl>

                  <FormControl>
                    <Input type="password" placeholder="Password" fontSize='12px' fontWeight="bold" bg='#eeeeee'/>
                  </FormControl>



                  <Button  bg="#171717" color='white' my="3">
                    Sign Up
                  </Button>

                  <Flex alignItems="center" color='gray' justifyContent="center" my="1" fontSize='10px' ml='20px' mr='20px'>
                    <span style={{ borderBottom: '1px solid gray', width: '100px', display: 'inline-block' }}>   </span>
                      <Text p='5px'>if feeling lazy</Text> 
                    <span style={{ borderBottom: '1px solid gray', width: '100px', display: 'inline-block' }}>  </span>
                    
                  </Flex>
                  
                  
                  
                  <Flex justifyContent="space-between" my="1" >
                    
                      <Button flex="1" textAlign="rigth" colorScheme='facebook' pr='10'>
                        <img src={iconFace} alt="Facebook Icon" style={{ width: '25px', height: '25px'}} />
                        Facebook 
                      </Button>
                      

                      <Button flex="1" colorScheme='twitter' leftIcon={<FaGoogle />} pr='10' marginLeft="10px">
                        Google
                      </Button>
                    
                  </Flex>

                  <Flex alignItems="center" justifyContent="center" my="1" fontSize='10px'>
                    <Text color="grey">Already a account? <Text as="span" color="black" fontWeight="bold" >Sign In</Text></Text>
                  </Flex>
                  <Divider />
                </Stack>
            </ChakraProvider>

          </Flex>


          
        </Box>
      </Flex>
    </div>
    
  );
}

export default App;
