import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [productos, setProductos] = useState([]);
  const [agregarShop, setagregarShop] = useState([]);
  const [carrito, setCarrito] = useState(false);
  const [total, setTotal] = useState(0);
  useEffect(() => {
      try {

        fetch('JSON/carrito.json')
        .then(response=>response.json())
        .then(data=>setProductos(data.productos))

      } catch (error) {
        console.error('Error fetching data:', error)
      }

  }, []); // [paginaActual] renderiza si cambio

  function agregarAlCarrito(producto){
    setagregarShop([...agregarShop,producto])
    setCarrito(true)
    console.log(agregarShop);
    setTotal(total+producto.precio)
  }

  function eliminarProducto(producto1) {
    console.log("Producto a eliminar:", producto1);
    //setagregarShop(agregarShop.filter(p => p.id !== producto1.id));
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
                    <strong>Precio: </strong> ${producto.precio}
                  </p>
                  <p>
                    <button onClick={()=>agregarAlCarrito(producto)} >Agregar al carrito</button>
                  </p>

                </div>
              </div>
            </div>
            ))}
            
          </div>
        </div>

      </div>
      
      {agregarShop.length>0 && (
        <div>
          <br></br>
          <h1>Carrito de Compras</h1>
          <div className='row'>
            <div className='productos col-md-8'>
              <div className='row'>
                {agregarShop.map((product1)=>(
                <div className='col-md-4 mt-3' key={product1.id}>
                  <div className='card'>
                    <div className='card-header'>
                      <h4>{product1.nombre}</h4>
                    </div>
                    <div className='card-body'>
                      <p>
                        <strong>Precio: </strong> ${product1.precio}
                      </p>
                      <button onClick={()=>eliminarProducto(producto1)} >Eliminar</button>
                      
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>

          <p>Total: ${total}</p>
        </div>
      )}


    </>
  );
}

export default App;

