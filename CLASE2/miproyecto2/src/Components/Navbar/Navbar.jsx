import React from 'react'
import './Navbar.css'

const Navbar = ({user}) => {
    // const {nombre, age, leGustaCss, imagen, apellido}=user
   //console.log(user)
    return(
        <div>   
            {user.nombre}
           {/* <li>{props.tarea}</li>
           <p>nombre:{nombre}</p>
           <p>apellido:{apellido}</p>
           <p>age:{age}</p>
           <p>Le gusta CSS?:{leGustaCss ? 'Si' : 'No'}</p>
           <img src={imagen} alt=""/> */}
        </div>
    );
}

export {Navbar}