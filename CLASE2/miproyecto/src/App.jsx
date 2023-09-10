import React from 'react'
import './App.css'

function App() {
 

  const todolist=['pedro','adrian','saddd']
  //let milista='pedro'
  return (
    <>
      <h1>mi lista de tareas</h1>
      <ul>
        {
          todolist.map((tarea, index)=> (
          <Navbar key={index} tarea={tarea}/>
          ))
        }
        
      </ul>
    </>
  )
}

export default App