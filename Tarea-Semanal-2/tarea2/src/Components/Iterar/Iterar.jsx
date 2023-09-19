import React, { useState } from 'react';

const Iterar = () => {
  const [numero, setNumero] = useState(0);
  const [iteracionActual, setIteracionActual] = useState(null);

  async function iterar(llamadaAtras) {
    for (let i = 1; i <= numero; i++) {
      setIteracionActual(i);
      await llamadaAtras(i);
    }
    // Reinicia la iteración cuando termina
    setIteracionActual(null);
  }

  // Ejemplo de uso de la función iterar
  async function miCallback(valor) {
    console.log(`Iteración ${valor}`);
  }

  const cambioNum = (evento) => {
    setNumero(parseInt(evento.target.value, 10));
  };

  const Click = async () => {
    await iterar(miCallback);
  };

  return (
    <div>
      <h1>Iterar</h1>
      <label>
        Ingrese un número:
        <input type="number" value={numero} onChange={cambioNum} />
      </label>
      <button onClick={Click}>
        Comenzar Iteración
      </button>
    </div>
  );
};

export { Iterar };
