import React from 'react'
//import './Navbar.css'

const Navbar = (props) => {
    console.log(props)
    return(
        <div>      
           <li>{props.tarea}</li>
        </div>
    )
}

export {Navbar}