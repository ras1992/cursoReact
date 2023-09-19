import React, { useState, useEffect } from 'react';

const CargaDatos = () => {
  const [data, setData] = useState([]);

  function cargarDatos() {
    return new Promise((resolucion, rechazo) => {
      setTimeout(() => {
        const cargaExitosa = false; // Simular fallo
          if (cargaExitosa) {
            const datos = ["Dato 1", "Dato 2", "Dato 3"];
            resolucion(datos);
            console.log(`Carga Existosa: ${datos}`)
          } else {
            rechazo(new Error("Error: La carga de datos falló."));
          }
          
      }, 3000); 
    });
  }

  async function cargarYMostrarDatos() {
    try {
      const resultado = await cargarDatos();
      setData(resultado);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    }
  }

  useEffect(() => {
    cargarYMostrarDatos();
  }, []);


  return (
    <div>
      <h1>CargaDatos 3 seg</h1> 


      <ul>
        {data.map((dato, index) => (
          <li key={index}>{dato}</li>
        ))}
      </ul>
    </div>
  );
};

export { CargaDatos };