import React from "react";

const MiComponente = () => {
  let nombre = "Tony";
  let web = "tony@vargas.cat";

  let usuario = {
    nombre: "Tony",
    apellido: "Vargas",
    curso: "REACT",
  };

  console.log(usuario);

  return (
    <>
      <h2>Primer Componente creado</h2>
      <p>Este es mi primer componente</p>
      <h3>Datos del Usuario:</h3>
      <ul>
        <li>Nombre: {nombre}</li>
        <li>Web: {web}</li>
      </ul>
      <h3>Nombre: {usuario.nombre}</h3>
      <h3>Apellido: {usuario.apellido}</h3>
      <h3>Curso: {usuario.curso}</h3>
    </>
  );
};

export default MiComponente;
