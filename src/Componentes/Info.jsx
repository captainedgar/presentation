import React from 'react'
import { useContext } from 'react'
import { ElContexto } from '../Contexto/MiContexto'
import '../App.css';

function Info() {
  const {valores} = useContext(ElContexto);
  const infoShow = ()=>{
    
  }
  return (
    <div className='profesor'>
      <h2>{valores[0].titulo}</h2>
      <h3>{valores[0].texto}</h3>
      <div className='buttons'>
     <button onClick={infoShow}>{valores[0].boton1}</button>  
     <button>{valores[0].boton2}</button>  
      </div>
    </div>
  )
}

export default Info
