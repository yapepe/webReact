import './assets/App.css'
import Navegacion from './components/Navegacion/Navegacion'
import Seccion1 from './components/Seccion1/Seccion1'
import Seccion2 from './components/Seccion2/Seccion2'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import logo from './assets/img/alien.png'

export default function App() {
  return (
    <div className="app">
      <Navegacion logo={logo} />
      <Seccion1 />
      <Seccion2 />
      <Contacto/>
      <Footer logo={logo} />
    </div>
  )
}
