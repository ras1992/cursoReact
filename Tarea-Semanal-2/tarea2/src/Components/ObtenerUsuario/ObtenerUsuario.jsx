import React, { useEffect } from 'react';


async function obtenerUsuario(usuario) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${usuario}`);
    if (!response.ok) {
      throw new Error(`No se pudo obtener el usuario: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el usuario:', error);
    throw error;
  }
}

const ObtenerUsuario = () => {
  useEffect(() => {
    async function ejemploObtenerUsuario() {
      const usuario = 'Rick Sanchez'; 
      try {
        const userInfo = await obtenerUsuario(usuario);
        console.log('Información del usuario:', userInfo);
      } catch (error) {
        console.error('Error en la obtención de usuario:', error);
      }
    }

    ejemploObtenerUsuario();
  }, []);

  return (
    <div>Obtener Usuario</div>
  );
};

export { ObtenerUsuario };
