import React from "react";

const SegundoComponente = () => {
    let libros = ["Harry Potter","Star Wars","El señor de los anillos"];
  return (
    <>
      <h2>Segundo Componente</h2>
      <h2>Mi lista de libros:</h2>
      {libros.length >=1 ? 
      (<ul>
        {
            libros.map((libro, indice) => {
                return <li key={indice}>{libro}</li>
            })
        }
      </ul>)
      :
      (<p>No hay libros</p>)
      }
    </>
  );
};

export default SegundoComponente;
