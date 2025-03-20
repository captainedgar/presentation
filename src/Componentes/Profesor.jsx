import React, { useContext } from 'react'
import { ElContexto } from '../Contexto/MiContexto';
import marta from '../img/marta.png';
function Profesor() {
  const {valores,showInfo, lugarInfo}= useContext(ElContexto);

  return (
    <>
   <div className={`profesorInfo ${showInfo ? 'visible' : lugarInfo ? 'oculto' : 'oculto'}`}>

       <div className=''>{valores[0].boton1}</div>
       <img src={marta} alt='foto' />
       <div>{valores[0].nombre}</div>
       
    </div>
    </>
  )
}

export default Profesor
