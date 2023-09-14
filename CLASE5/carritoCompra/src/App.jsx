import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState(false);
  useEffect(() => {
      try {

        fetch('JSON/carrito.jason')
        .then(response=>response.json())
        .then(data=>setProductos(data.productos))

        
     
      } catch (error) {
        console.error('Error fetching data:', error)
      }

  }, []); // [paginaActual] renderiza si cambio

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
      <h1>Tienda online</h1>
      <div className='row'>
        <div className='productos col-md-8'>
          <div className='row'>
            {productos.map((producto)=>(
            <div className='col-md-4 mt-3' key={producto.id}>
              <div className='card'>
                <div className='card-header'>
                  <h4>{producto.nombre}</h4>
                </div>
                <div className='card-body'>
                  <p>
                    <strong>Precio: </strong> ${producto.valor}
                  </p>
                  <p>
                    <button>Agregar al carrito</button>
                  </p>

                </div>
              </div>
            </div>
            ))}
            
          </div>
        </div>

      </div>
      
      {carrito && (

        HOLA

      )}


    </>
  );
}

export default App;

