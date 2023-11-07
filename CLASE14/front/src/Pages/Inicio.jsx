import React, { useEffect, useState } from 'react';
import './Inicio'
import { Detalles } from '../Components/Detalles/Detalles';
import { Formulario } from '../Components/Formulario.jsx/Formulario';


const Inicio = () => {
    const [datos, setDatos]=useState(null)

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
        <>
            <Formulario></Formulario>
            {datos && datos.map(dato =>(
                <div key={dato._id}>
                        <p>{dato.materia}</p>
                        <Detalles dato={dato} key={dato.id}></Detalles>
                </div>
                
            ))}

        </>
    )
}

export { Inicio }