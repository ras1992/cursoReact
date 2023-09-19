import React, { useEffect, useState } from 'react';

function obtenerDatos(urls) {
  return Promise.all(urls.map(url => fetch(url).then(response => response.json())));
}

function MultiplePromesas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const urls = [
      'https://rickandmortyapi.com/api/character?page=1',
      'https://rickandmortyapi.com/api/character?page=2',
      'https://rickandmortyapi.com/api/character?page=3'
    ];

    async function fetchData() {
      try {
        const responses = await obtenerDatos(urls);
        const characters = responses.map(response => response.results).flat();
        setData(characters);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Datos Cargados:</h1>
      <ol>
        {data.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default MultiplePromesas;
