import { CadenaPromesas } from './Components/CadenaPromesas/CadenaPromesas'
import { CargaDatos } from './Components/Carga/Carga'
import { ConcurrenciaLimitada } from './Components/ConcurrenciaLimitada/ConcurrenciaLimitada'
import { Iterar } from './Components/Iterar/Iterar'
import MultiplePromesas from './Components/Multiple/MultiplePromesas'
import { ObtenerUsuario } from './Components/ObtenerUsuario/ObtenerUsuario'
import { PromesasConErrores } from './Components/PromesaConErrores/PromesaConErrores'
import { RetardoAleatorio } from './Components/RetardoAleatorio/RetardoAleatorio'
import { TiempoEspera } from './Components/TiempoEspera/TiempoEspera'

function App() {


  return (
    <>
      <CargaDatos></CargaDatos>
      <MultiplePromesas></MultiplePromesas>
      <Iterar></Iterar>
      <TiempoEspera></TiempoEspera>
      <CadenaPromesas></CadenaPromesas>
      <ConcurrenciaLimitada></ConcurrenciaLimitada>
      <PromesasConErrores></PromesasConErrores>
      <RetardoAleatorio></RetardoAleatorio>
      <ObtenerUsuario></ObtenerUsuario>
    </>
  )
}

export default App
