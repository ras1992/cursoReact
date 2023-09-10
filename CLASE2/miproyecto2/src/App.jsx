import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Card } from './Components/Card/Card'

function App() {
  const user={
    nombre:'juan',
    apellido:'perez',
    age:'32',
    leGustaCss:false,
    imagen: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png',
  }

  return (
    <>

      <h1>Mi lista de tareas</h1>
      <h3><Navbar user={user}/></h3>
      
      <Card nombre={user.nombre} apellido={user.apellido} edad={user.age}/>

      <ul>
        {
          //todolist.map((tarea, index)=>( ))
        }
      </ul>
     
    </>
  )
}

export default App
