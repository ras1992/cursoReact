import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import { Prueba } from './Components/Prueba/Prueba.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* agregado Cha */}
    <ChakraProvider>
      <Navbar />
      <App />
    </ChakraProvider>
    <Prueba />
  
  </React.StrictMode>,
)
