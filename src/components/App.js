import './assets/App.css'
import Navegacion from './components/Navegacion/Navegacion'
import Seccion1 from './components/Seccion1/Seccion1'

export default function App() {
  return (
    <div className="app">
      <Navegacion/>
      <Seccion1 titulo='Aplicaciones'   p='Ipsum commodo reprehenderit minim cupidatat. tetur aute exercitation do. '/>
    </div>
  )
}
