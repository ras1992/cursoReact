import React, { useEffect } from 'react';

// Función para ejecutar múltiples promesas en paralelo y maneja errores
async function promesasConErrores(promesas) {
  const resultados = [];
  const errores = [];

  await Promise.all(promesas.map(async (promesa) => {
    try {
      const resultado = await promesa;
      resultados.push(resultado);
    } catch (error) {
      errores.push(error);
    }
  }));

  return { resultados, errores };
}

const PromesasConErrores = () => {
  useEffect(() => {
    async function ejemploPromesas() {

      const promesa1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Promesa 1 completada');
        }, 1000);
      });

      const promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('Error en promesa 2');
        }, 500);
      });

      const promesa3 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('Promesa 3 completada');
        }, 1500);
      });

      const promesa4 = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('Error en promesa 4');
        }, 200);
      });

      const { resultados, errores } = await promesasConErrores([promesa1, promesa2, promesa3, promesa4]);

      console.log('Resultados:', resultados);
      console.log('Errores:', errores);
    }

    ejemploPromesas();
  }, []);

  return (
    <div>Promesas con Errores</div>
  );
};

export { PromesasConErrores };
