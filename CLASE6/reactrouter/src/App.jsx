import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { Home } from './Components/Home/Home.jsx'
import { About } from './Components/About/About.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <h1>logo</h1>
            <Link to='/'>Home</Link>
            <NavLink to='about'>About</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
