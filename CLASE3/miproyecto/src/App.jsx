import {Box, Container, Heading, Text} from '@chakra-ui/react'
import {motion} from "framer-motion"
import './App.css'

function App() {
  const miEstilo={
    p:"10px",
    bg:"purple.400",
    color:"white",
    m:"10px",
    textAlign:"center",
    filter:'blur(2px)',
    ':hover':{
      color:'black',
      bg:'blue.200'
    }
  }
  return (
    <>
    <motion.Container
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ duration: 0.5 }}
    >
      {/* <Heading my={30}>Hola mundo</Heading> */}
      <Heading my='3em' mx='3em'>Hola mundo</Heading>
      <Text marginLeft={'30px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos magni officia illum consectetur perferendis facere maiores repellendus, aliquid vel possimus ea laudantium vero laboriosam perspiciatis tempore fuga. Reiciendis, dolores.</Text>
      
      <Text ml={'30px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos magni officia illum consectetur perferendis facere maiores repellendus, aliquid vel possimus ea laudantium vero laboriosam perspiciatis tempore fuga. Reiciendis, dolores.</Text>
      
      <Box my='30px' p='20px' bg="orange">
        <Text color='white'>Soy una caja</Text>
      </Box>
      
      <Box sx={miEstilo}>
          Hola Mundo
      </Box>
     
     
      {/* <p>Hola mundo</p> */}
    </motion.Container>

    {/* <Box bg={'blue.100'}>
      <p>Hola mundo</p>
    </Box>    */}
    </>
  )
}

export default App
