import React from 'react';
import './Navbar'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <div className='logo'>
                <Link to='/'>
                    <h1>Colegio Misiones</h1>
                </Link>  
            </div>
        </header>
        
    )
}

export { Navbar }