import React from 'react'

export const EventosComponente = () => {

  const hasDadoUnClick = () => {
    alert("Has dado un click!!")
  }

  const hasDadoDobleClick = () => {
    alert("Has dado doble click!!")
  }

  return (
    <div>
        <h1>Eventos en React</h1>
        <button onClick={ () => {
            hasDadoUnClick()
        }}>DAME UN CLICK</button>
        <button onClick={ () => {
           hasDadoDobleClick()
        }}>DAME DOBLE CLICK</button>
    </div>
  )
}
