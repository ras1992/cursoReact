import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [paginaActual, setpaginaActual] = useState(1);
  const [paginaFinal, setpaginaFinal] = useState(0);
  const [siguientePagina, setsiguientePagina] = useState('');

  const URLBASE = 'https://rickandmortyapi.com/api/character';

  useEffect(() => {
    const getPersonajes = async () => {
      try {
        const response = await axios.get(`${URLBASE}?page=${paginaActual}`)
        setPersonajes(response.data.results)
        setsiguientePagina(response.data.info.next)
        setpaginaFinal(response.data.info.pages)


        console.log(response.data.info.pages)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };

    getPersonajes();
  }, [paginaActual]); // [paginaActual] renderiza si cambio

  function pagSiguiente() {
    if (siguientePagina) {
      setpaginaActual(paginaActual + 1);
    }
  }

  function pagAnterior() {
    if (paginaActual > 1) {
      setpaginaActual(paginaActual - 1);
    }
  }

  return (
    <>
      <h1>Personajes:</h1>
      <button onClick={pagAnterior} disabled={paginaActual==1 ? 'disable':''}>Anterior</button>
      <button onClick={pagSiguiente} disabled={paginaActual==paginaFinal ? 'disable':''}>Siguiente</button>
      {personajes.map((pj) => (
        <div key={pj.id}>
          <h2>{pj.name}</h2>
          <h5>Especie: {pj.species}</h5>
          <img src={pj.image} alt={pj.name} />
        </div>
      ))}
    </>
  );
}

export default App;
// import { useEffect, useState } from 'react'
// //useEffect llamadas a apis y archivos externos
// import axios from 'axios'
// function App() {
//   // consulta a la api

//   const [personajes, setPersonajes] = useState([]);

//   const url='https://rickandmortyapi.com/api/character'
  
//   useEffect(()=>{
//     const getPersonajes=async()=>{
//       let response=await axios.get(url)
//       console.log(response.data.results)
//       setPersonajes(response.data.results)
//     }
//     getPersonajes()
    
//   },[])

//   function pagSiguiente(){

//   }
//   function pagAnterior(){
    
//   }

//   return (
//     <>
//     <h1>Personajes:</h1>
//     <button onCLick={pagAnterior}>Anterior</button>
//     <button onCLick={pagSiguiente}>Siguiente</button>
//         {personajes.map((pj) => (
//           <div key={pj.id}>
//             <h2>{pj.name}</h2> 
//             <img src={pj.image} ></img>
//           </div>
//         ))}
//     </>
        
//   )
// }

// export default App
