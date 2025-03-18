
import './App.css'
import { InfoProvider } from './Contexto/MiContexto';
import Idioma from './Componentes/Idioma';
import Info from './Componentes/Info';
import Profesor from './Componentes/Profesor';

function App() {
 

  return (
    <>
    <InfoProvider>
    <div>
    <div>
      <Idioma/>
      <Info/>
    </div>

    <div>
      <Profesor/>
    </div>
    </div>

</InfoProvider>
    </>
  )
}

export default App
