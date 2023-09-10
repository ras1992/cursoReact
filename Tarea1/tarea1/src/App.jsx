import { Box, Flex, Text, Input, Button, Divider, Stack, FormControl, FormErrorMessage} from '@chakra-ui/react';
import { FaGoogle, FaBars, FaUser, FaLock } from 'react-icons/fa'; // Replace 'fa' with the correct FontAwesome library

import React, { useState } from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import './App.css';
import patas from './Components/Images/patas3.png';
import iconFace from './Components/Images/iconFace.png';
import iconZapa from './Components/Images/icono2.png';
import iconUser from './Components/Images/user.png';
import iconLock from './Components/Images/lock.png';

import style from './Components/style/styleConstant.js'

function App() {
  

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


  const [mostrarDefecto, setMostrarDefecto] = useState(true);
  const [ocultarDefecto, setOcultarDefecto] = useState(false);

  const toggleElementVisibility = () => {
    setMostrarDefecto(!mostrarDefecto);
    setOcultarDefecto(!ocultarDefecto);
  };
  return (
    <div sx={{ ...style.standard, h: '100vh',}}>
      <Flex as="login" justify="space-between" wrap="wrap">
        <Box sx={{ ...style.boxStart, ...style.standard, h: '100vh', }}>

          <div>
            <Box>
              <Text sx={{ ...style.showesTitle, mb: '1' }}>Welcome to El-Showes</Text>
              <Text sx={{ ...style.showesSubtitle, mt: '1' }}>For a better experience with your shoes!</Text>

            </Box>
            <Box>
              <img src={patas} alt="Mi Imagen" style={style.imgPata}/>
            </Box>
          </div>
          
        </Box>
        
        

        <Box sx={{ ...style.boxEnd, h:'100vh'}}>
          <Flex flexDirection="column">
            <Flex sx={style.navbarStyles} > {/* Comienza el navbar */}
              
              <Flex ml="3em" alignItems= 'center'>
                <Box sx={style.fbIcon} 
                >
                  <img src={iconZapa} alt="Facebook Icon" />
                </Box>

                <Text ml="2em" fontSize='30px' sx={style.letraRara} >El-Shoes</Text>  

              </Flex>
              
              <Flex alignItems="center">
                <Button alignItems="center" mr="2em"  >
                  <FaBars style={{fontSize: '1.5rem' }} />
                </Button>
              </Flex>
            </Flex> {/*termina el navbar */}

            <ChakraProvider >
            {mostrarDefecto && (
              <box>
                <Stack sx={style.stack}>
                  <Text sx={style.stackText} >Sign Up</Text>

                  {/* {errorMessageExample()} */}

                  <FormControl>
                    <Input type="email" placeholder="Email or Phone" sx={style.textPlaceholder}/>
                  </FormControl>

                  <FormControl>
                    <Input type="text" placeholder="Full Name" sx={style.textPlaceholder}/>
                  </FormControl>

                  <FormControl>
                    <Input type="password" placeholder="Password" sx={style.textPlaceholder}/>
                  </FormControl>

                  <Button  bg="#171717" color='white' my="3">
                    Sign Up
                  </Button>

                  <Flex sx={style.flexLine}>
                    <span style={style.line}>   </span>
                      <Text p='5px'>if feeling lazy</Text> 
                    <span style={style.line}>  </span>
                    
                  </Flex>
                  
                  <Flex justifyContent="space-between" my="1" >
                    
                      <Button colorScheme='facebook' sx={style.faceBtn} >
                        <img src={iconFace} alt="Facebook Icon" style={{ width: '25px', height: '25px'}} />
                        Facebook 
                      </Button>
                      

                      <Button flex="1" colorScheme='twitter' leftIcon={<FaGoogle />} pr='10' marginLeft="10px">
                        Google
                      </Button>
                    
                  </Flex>

                  <Flex sx={style.textRedirect} >
                    <Text color="grey">Already a account? <Text as="span" color="black" fontWeight="bold" onClick={toggleElementVisibility}
                    style={{ cursor: 'pointer' }}>Sign In</Text></Text>
                  </Flex>
                  <Divider />
                </Stack>
              </box>
              )}
              {ocultarDefecto && (
              <box>
                <Stack sx={style.stack}>
                  <Text sx={style.stackText} >Sign In</Text>

                  {/* {errorMessageExample()} */}


                  <FormControl position="relative">
                    <Input sx={style.imput} type="email" placeholder="Usename / Email"/>
                    <img
                      src={iconUser}
                      alt="User Icon"
                      style={style.userIcon}
                    />
                  </FormControl>

                  <FormControl position="relative">
                    <Input sx={style.imput} type="password" placeholder="Password"/>
                    <img
                      src={iconLock}
                      alt="Lock Icon"
                      style={style.lockIcon}
                    />
                  </FormControl>

                  <Button  bg="#171717" color='white' my="3">
                    Sing In
                  </Button>

                  <Flex sx={style.textRedirectIn}>
                    <Text color="grey">Don't have an account? <Text onClick={toggleElementVisibility}
                     cursor= 'pointer' as="span" color="black" fontWeight="bold" >Sign Up</Text></Text>
                  </Flex>
                  <Divider />
                </Stack>
              </box>
              )}
            </ChakraProvider>

          </Flex>


          
        </Box>
      </Flex>
    </div>
    
  );
}

export default App;
