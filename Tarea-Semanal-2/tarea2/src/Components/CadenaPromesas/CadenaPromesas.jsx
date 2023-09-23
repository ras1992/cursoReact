import React from 'react';

const CadenaPromesas = () => {

function f1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Paso 1 completado");
      }, 1000);
    });
  }
  

  function f2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Paso 2 completado");
      }, 2000);
    });
  }
  

  function f3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Paso 3 completado");
      }, 1500);
    });
  }
  

  async function ejecutarPasos() {
    try {
      const mensaje1 = await f1();
      console.log(mensaje1);
  
      const mensaje2 = await f2();
      console.log(mensaje2);
  
      const mensaje3 = await f3();
      console.log(mensaje3);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Llamar a la función principal
  ejecutarPasos();
  
    return(
        <div>Cadena de Promesas ir log</div>
    )
}

export { CadenaPromesas }