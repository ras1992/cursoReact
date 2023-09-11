import { Box, Flex, Text, Input, Button, Stack, FormControl } from '@chakra-ui/react';


import React from 'react';
import iconUser from '../Images/user.png';
import iconLock from '../Images/lock.png';
import style from '../Style/styleConstant.js'

const SignIn = ({ toggleElementVisibility }) => {
    return (
        <Box>
            <Stack sx={style.stack}>
                <Text sx={style.stackText} >Sign In</Text>

                {/* {errorMessageExample()} */}

                <FormControl position="relative">
                    <Input sx={style.imput} type="email" placeholder="Usename / Email" />
                    <img
                        src={iconUser}
                        alt="User Icon"
                        style={style.userIcon}
                    />
                </FormControl>

                <FormControl position="relative">
                    <Input sx={style.imput} type="password" placeholder="Password" />
                    <img
                        src={iconLock}
                        alt="Lock Icon"
                        style={style.lockIcon}
                    />
                </FormControl>

                <Button bg="#171717" color='white' my="3">
                    Sing In
                </Button>

                <Flex sx={style.textRedirectIn}>
                    <Text color="grey">Don't have an account? <Text onClick={toggleElementVisibility}
                        cursor='pointer' as="span" color="black" fontWeight="bold" >Sign Up</Text></Text>
                </Flex>
            </Stack>
        </Box>
    )
}

export { SignIn }