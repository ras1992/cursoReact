import React, { useEffect } from 'react';

// Función para esperar un tiempo aleatorio antes de resolver una promesa
function retardoAleatorio(maxTiempo) {
  const tiempoAleatorio = Math.floor(Math.random() * maxTiempo) + 1;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promesa resuelta después de ${tiempoAleatorio} ms`);
    }, tiempoAleatorio);
  });
}

const RetardoAleatorio = () => {
  useEffect(() => {
    async function ejemploRetardoAleatorio() {
      const maxTiempo = 5000; // Cambia este valor según tus necesidades
      const resultado = await retardoAleatorio(maxTiempo);
      console.log(resultado);
    }

    ejemploRetardoAleatorio();
  }, []);

  return (
    <div>Retardo Aleatorio</div>
  );
};

export { RetardoAleatorio };
