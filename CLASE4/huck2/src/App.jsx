// import { useEffect, useState, onChange } from 'react';

// function App() {
//   const [paises, setPaises] = useState([]);
//   const [busqueda, setBusqueda] = useState('');

//   useEffect(() => {
//     const cargarDatos = async () => {
//       try {
//         const response = await fetch('Json/paises.json');

//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();
//         setPaises(data.countries); // Corrected this line
//         console.log(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     cargarDatos();
//   }, []);



//   const buscar = (valor) => {

//   };

//   return (
//     <>
//       {/* <input type='text' placeholder='Buscar pais' onChange={(e)=>console.log(e.event.value)}></input> */}
//       {/* <input type='text' placeholder='Buscar pais' onChange={(e)=>console.log(e.target.value)}></input> */}
//       <input type='text' placeholder='Buscar pais' onChange={(e)=>setBusqueda(e.target.value)}></input>
//       <h1>Países:</h1>
//       <ul>
//         {paisesFiltrados.map((pais) => (
//           <ul>
//             <p key={pais.id}>{pais.name}</p>
//             <li>{pais.id}</li>
//           </ul>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;



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