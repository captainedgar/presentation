import React, { useContext } from 'react'
import { ElContexto } from '../Contexto/MiContexto';


function Profesor() {
  const {valores,showInfo, lugarInfo}= useContext(ElContexto);
  const idiomas = valores[3].idioma;

  const imagen = `../img/${valores[idiomas].foto}`
  return (   
    <>
   <div className={`profesorInfo ${showInfo ? 'visible' : lugarInfo ? 'oculto' : 'oculto'}`}>

       <div className=''>{valores[0].boton1}</div>
       <img src={imagen} alt='foto' />
       <div>{valores[idiomas].nombre}</div>
       
    </div>
    </>
  )
}

export default Profesor
