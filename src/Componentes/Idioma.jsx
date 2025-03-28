
import { useContext } from 'react';
import { ElContexto } from '../Contexto/MiContexto';
import spain from '../img/spain.jpg';
import france from '../img/francia.png';
import uk from '../img/uk.png';
import '../App.css';



function Idioma() {
const {valores, setValores}=useContext(ElContexto);
const sustitucion = (posicion)=>{
  setValores(
    valores.map((dato,indice)=>(
      indice==3
      ? {...dato,idioma:posicion}
      : {...dato}
    ) )
  );
}
const cambio1 = ()=>{
  sustitucion(0)
}
const cambio2 = ()=>{
  sustitucion(1)
 
}
const cambio3 = ()=>{
 sustitucion(2)
}
  return (
    <div className='idiomas'>
     <img src={spain} alt='' onClick={cambio1}/>
     <img src={france} alt='' onClick={cambio3}/>
     <img src={uk} alt='' onClick={cambio2}/>
    </div>
  )
}

export default Idioma
