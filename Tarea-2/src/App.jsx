import { Flex, Box } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'

import { Line } from './Components/Line/Line';
import { Services } from './Components/Services/Services';
import { Works } from './Components/Works/Works';
import { Resume } from './Components/Resume/Resume';
import { Clients } from './Components/Clients/Clients';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';


function App() {


  return (
    <>
      <Box  flexDirection='column' justify="space-between" wrap="wrap" bg='#282830'>


          <Navbar></Navbar>

          
          <Home></Home>
            <Line></Line>
          <Services></Services>
            <Line></Line>
          <Works></Works>
            <Line></Line>
          <Resume></Resume>
          <Line></Line>
          <Clients></Clients>
            <Line></Line>
          <Contact></Contact>
            <Line></Line>
          <Footer></Footer>
      </Box>
    </>
  )
}

export default App
