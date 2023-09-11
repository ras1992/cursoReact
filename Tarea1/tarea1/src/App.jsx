import { Box, Flex} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import style from './Components/Style/styleConstant.js'
import { Navbar } from './Components/Navbar/Navbar';
import { SignUp } from './Components/SignUp/SignUp';
import { SignIn } from './Components/SingIn/SignIn';
import { Welcome } from './Components/Welcome/Welcome';

function App() {

  const [mostrarDefecto, setMostrarDefecto] = useState(true);
  const [ocultarDefecto, setOcultarDefecto] = useState(false);

  const toggleElementVisibility = () => {
    setMostrarDefecto(!mostrarDefecto);
    setOcultarDefecto(!ocultarDefecto);
  };
  return (
    <div sx={{ ...style.standard, h: '100vh', }}>
      <Flex as="login" justify="space-between" wrap="wrap">

        <Welcome />

        <Box sx={{ ...style.boxEnd, h: '100vh' }}>
          <Flex flexDirection="column">

            <Navbar></Navbar>

            <ChakraProvider >
              {mostrarDefecto && (

                <SignUp toggleElementVisibility={toggleElementVisibility} />

              )}

              {ocultarDefecto && (

                <SignIn toggleElementVisibility={toggleElementVisibility} />
                
              )}
            </ChakraProvider>

          </Flex>

        </Box>
      </Flex>
    </div>

  );
}

export default App;
