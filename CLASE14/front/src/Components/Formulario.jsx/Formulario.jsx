import { React, useState } from 'react';
import './Formulario'

const Formulario = () => {
    const [materia, setMateria] = useState('');
    const [calificacion, setCalificacion] = useState('');
    const [aula, setAula] = useState('');

    const enviarFormulario = async (e) => {
        e.preventDefault();
        console.log(typeof calificacion);
        const datos={materia,calificacion,aula}
        
        const respuesta=await fetch('/miapi/pepe',{
            method:'POST',
            body: JSON.stringify(datos),
            header:{
                'Content-Type':'application/json'
            }
        })
        const recibo= await respuesta.json()

        if(respuesta.ok){
            console.log('se agrego', recibo)
        }

    };

    return (
        <form onSubmit={enviarFormulario}>
            <h4>-.-.-.-.-.-.-.-</h4>
            <h4>Crear datos</h4>

            <label htmlFor="">Ingrese materia</label>
            <input
                type="text"
                value={materia}
                onChange={(event) => setMateria(event.target.value)}
            />

            <label htmlFor="">Ingrese calificacion</label>
            <input
                type="text"
                value={calificacion}
                onChange={(event) => setCalificacion(event.target.value)}
            />

            <label htmlFor="">Ingrese aula</label>
            <input
                type="text"
                value={aula}
                onChange={(event) => setAula(event.target.value)}
            />
            <button>Enviar datos</button>
            <h4>-.-.-.-.-.-.-.-</h4>
        </form>
    );
};

export { Formulario }