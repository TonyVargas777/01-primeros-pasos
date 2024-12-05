import React from 'react'
import PropTypes from 'prop-types'

export const TercerComponente = ({nombre, apellidos}) => {
    
  return (
    <div>
        <h2>Tercer Componente</h2> 
        <h2>Comunicación entre Componentes</h2>  
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>    
        </ul>      
    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string,
    apellidos: PropTypes.string
}
