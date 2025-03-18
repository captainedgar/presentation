
import { useContext } from 'react';
import { ElContexto } from '../Contexto/MiContexto';
import spain from '../img/spain.jpg';
import france from '../img/francia.png';
import uk from '../img/uk.png';
import '../App.css';



function Idioma() {
const {valores}=useContext(ElContexto);
  return (
    <div className='idiomas'>
     <img src={spain} alt='' onClick={valores.idioma}/>
     <img src={france} alt=''/>
     <img src={uk} alt=''/>
    </div>
  )
}

export default Idioma
