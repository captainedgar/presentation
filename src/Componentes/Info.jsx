import React from 'react'
import { useContext } from 'react'
import { ElContexto } from '../Contexto/MiContexto'
import '../App.css';

function Info() {
  const {valores,showInfo,setShowInfo,lugarInfo, setLugarInfo} = useContext(ElContexto);
  
  return (
    <div className='profesor'>
      <h2>{valores[0].titulo}</h2>
      <h3>{valores[0].texto}</h3>
      <div className='buttons'>
     <button onClick={()=>setShowInfo(!showInfo)}>{valores[0].boton1}</button>  
     <button onClick={()=>setLugarInfo(!lugarInfo)}>{valores[0].boton2}</button>  
      </div>
    </div>
  )
}

export default Info
