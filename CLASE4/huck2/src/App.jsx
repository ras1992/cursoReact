import { useEffect, useState } from 'react';

function App() {
  const [paises, setPaises] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch('Json/paises.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setPaises(data.countries);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    cargarDatos();
  }, []);

  const paisesFiltrados = paises.filter((pais) =>
    pais.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <input
        type='text'
        placeholder='Buscar país'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <h1>Países:</h1>
      <ul>
        {paisesFiltrados.map((pais) => (
          <li key={pais.id}>{pais.name}
          <p>{pais.id}</p></li>
        ))}
      </ul>
    </>
  );
}

export default App;