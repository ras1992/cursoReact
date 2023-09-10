import React from 'react';

const Card = ({ nombre, apellido, edad }) => {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Apellido: {apellido}</p>
      <p>Edad: {edad}</p>
    </div>
  );
};

export { Card };