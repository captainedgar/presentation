import React from 'react'
import { useContext } from 'react'
import { ElContexto } from '../Contexto/MiContexto'

function Lugar() {
  const {valores, lugarInfo,showInfo}=useContext(ElContexto);
  const idiomas = valores[3].idioma;
  return (
    <div className={`lugar ${lugarInfo ? 'visible': showInfo ? 'oculto' : 'oculto'}`}>
      <h2>{valores[idiomas].boton2}</h2>
      <h3>{valores[0].direccion}</h3>
    </div>
  )
}

export default Lugar
