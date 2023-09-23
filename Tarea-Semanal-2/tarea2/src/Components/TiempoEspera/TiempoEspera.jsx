import React from 'react';

const TiempoEspera = () => {
    function esperar(milisegundos) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(); // Resuelve la promesa después del tiempo de espera
          }, milisegundos);
        });
      }
      
      // Ejemplo de uso de la función esperar
      async function ejemploEsperar() {
        console.log("Comenzando a esperar");
        await esperar(2000); // Espera 2 segundos (2 Segundos)
        console.log("Espera finalizada.");
      }
      

      ejemploEsperar();

    return(
        <div>Tiempo Espera ir al log</div>
    )
}

export { TiempoEspera }