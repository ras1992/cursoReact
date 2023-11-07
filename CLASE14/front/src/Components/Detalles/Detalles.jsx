import React from 'react';
import './Detalles'

const Detalles = ({dato}) => {
    return(
        <div>
            <h4>{dato.calificacion}</h4>
        </div>
    )
}

export { Detalles }