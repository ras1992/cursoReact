import React, { useEffect, useState } from 'react';
import './Inicio'

const Inicio = () => {
    const [datos, setDatos]=useState([])

    useEffect(()=>{
        const traerInfo= async()=>{
            try {
                const response = await fetch('/miapi/pepe');
                if (response.ok) {
                    const json = await response.json();
                    setDatos(json);
                } else {
                    console.error('Error al obtener los datos de la API');
                }
            } catch (error) {
                console.error('Error en la solicitud a la API:', error);
            }
        }
        traerInfo()
    },[])

    console.log(datos)
    return(
        <div>
            {datos.map(dato =>(
                <p>dato</p>

            )
                
                )}
        </div>
    )
}

export { Inicio }