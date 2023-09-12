import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // huck
  const [count, setCount]=useState(0)
  console.log(count)

  function incrementar(){
    if(count<10){
      setCount(count+1)
    }
    
  }

  function reducir(){
    if(count>0){
      setCount(count-1)
    }
  }

  return (
    <>
      <p>contador:{count}</p>
      {/* <button onClick={incrementar}>incrementar</button> */}
      
      {/* <button onClick={incrementar} disabled>incrementar</button> */}

      <button onClick={incrementar} disabled={count==10 ? 'disable':''} >incrementar</button>

      <button onClick={reducir} disabled={count==0 ? 'disable':''}>reducir</button>
    </>
  )
}

export default App
