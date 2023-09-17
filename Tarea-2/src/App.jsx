import { Flex, Box } from '@chakra-ui/react';
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'
import style from './AppStyle'


function App() {


  return (
    <>
      <Box  flexDirection='column' style={{background: `linear-gradient(to bottom left, #101417, #282830)`}}>


          <Navbar></Navbar>


          
          <Home></Home>

      </Box>
    </>
  )
}

export default App
