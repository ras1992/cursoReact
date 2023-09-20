import { Flex, Box } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'
import style from './AppStyle'
import { Line } from './Components/Line/Line';
import { Services } from './Components/Services/Services';
import { Works } from './Components/Works/Works';
import { Resume } from './Components/Resume/Resume';
import { Clients } from './Components/Clients/Clients';
import { Contact } from './Components/Contact/Contact';


function App() {


  return (
    <>
      <Box  flexDirection='column' justify="space-between" wrap="wrap" style={{background: `linear-gradient(to bottom left, #101417, #282830)`}}>


          <Navbar></Navbar>

          
          <Home></Home>
          <Services></Services>
          <Works></Works>
          <Resume></Resume>
          <Clients></Clients>
          <Contact></Contact>
      </Box>
    </>
  )
}

export default App
