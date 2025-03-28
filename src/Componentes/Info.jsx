import React from 'react'
import { useContext } from 'react'
import { ElContexto } from '../Contexto/MiContexto'
import '../App.css';

function Info() {
  const {valores,showInfo,setShowInfo,lugarInfo, setLugarInfo} = useContext(ElContexto);
  const idiomas = valores[3].idioma;
  return (
    <div className='profesor'>
      <h2>{valores[idiomas].titulo}</h2>
      <h3>{valores[idiomas].texto}</h3>
      <div className='buttons'>
     <button onClick={()=>setShowInfo(!showInfo)}>{valores[idiomas].boton1}</button>  
     <button onClick={()=>setLugarInfo(!lugarInfo)}>{valores[idiomas].boton2}</button>  
      </div>
    </div>
  )
}

export default Info
