import React, { useEffect } from 'react';

// Función para procesar elementos en paralelo con concurrencia limitada
async function procesarConcurrencia(arr, procesamiento, limite) {
  const resultados = [];
  const ejecutando = [];

  async function ejecutarElemento(elemento) {
    ejecutando.push(procesamiento(elemento));
    const indice = ejecutando.length - 1;
    const resultado = await ejecutando[indice];
    resultados.push(resultado);
    ejecutando.splice(indice, 1);
  }

  const ejecutarProcesamiento = async () => {
    while (arr.length > 0) {
      if (ejecutando.length < limite) {
        const elemento = arr.pop();
        if (elemento) {
          await ejecutarElemento(elemento);
        }
      } else {
        await Promise.race(ejecutando);
      }
    }

    // Esperar a que se completen todas las tareas restantes
    await Promise.all(ejecutando);
  };

  await ejecutarProcesamiento();
  return resultados;
}

const ConcurrenciaLimitada = () => {
  useEffect(() => {
    async function ejemploProcesamiento(elemento) {
      // Simular un procesamiento asincrónico
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Procesando: ${elemento}`);
          resolve(`Resultado de ${elemento}`);
        }, 1000);
      });
    }

    async function procesarDatosConcurrenciaLimitada() {
      const elementos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const limiteConcurrencia = 3; // Cambia este valor según tus necesidades
      const resultados = await procesarConcurrencia(elementos, ejemploProcesamiento, limiteConcurrencia);
      console.log('Resultados:', resultados);
    }

    procesarDatosConcurrenciaLimitada();
  }, []);

  return (
    <div>Concurrencia Limitada</div>
  );
};

export { ConcurrenciaLimitada };
