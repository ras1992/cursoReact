import { Box, Flex, Text, Input, Button, Stack, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa'; // Replace 'fa' with the correct FontAwesome library
import React from 'react';
import iconFace from '../Images/iconFace.png';
import style from '../Style/styleConstant.js'


const SignUp = ({ toggleElementVisibility }) => {
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
    
    return (
        <Box>
            <Stack sx={style.stack}>
                <Text sx={style.stackText} >Sign Up</Text>

                {/* {errorMessageExample()} */}

                <FormControl>
                    <Input type="email" placeholder="Email or Phone" sx={style.textPlaceholder} />
                </FormControl>

                <FormControl>
                    <Input type="text" placeholder="Full Name" sx={style.textPlaceholder} />
                </FormControl>

                <FormControl>
                    <Input type="password" placeholder="Password" sx={style.textPlaceholder} />
                </FormControl>

                <Button bg="#171717" color='white' my="3">
                    Sign Up
                </Button>

                <Flex sx={style.flexLine}>
                    <span style={style.line}>   </span>
                    <Text p='5px'>if feeling lazy</Text>
                    <span style={style.line}>  </span>

                </Flex>

                <Flex justifyContent="space-between" my="1" >

                    <Button colorScheme='facebook' sx={style.faceBtn} >
                        <img src={iconFace} alt="Facebook Icon" style={{ width: '25px', height: '25px' }} />
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
            </Stack>
        </Box>
    )
}

export { SignUp }