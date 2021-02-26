import './assets/App.css'
import Navegacion from './components/Navegacion/Navegacion'
import Seccion1 from './components/Seccion1/Seccion1'
import Seccion2 from './components/Seccion2/Seccion2'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="app">
      <Navegacion/>
      <Seccion1 titulo='Aplicaciones'   p='Ipsum commodo reprehenderit minim cupidatat. tetur aute exercitation do. ' />
      <Seccion2 titulo='Aplicaciones'   p='Ipsum commodo reprehenderit minim cupidatat. tetur aute exercitation do. '
                titulo2='Afdsfds'   p2='Ipsum commodo reprehenderit minim cupidatat. tetur aute exercitation do. '
                titulo3='Ffafafafafaf'   p3='Ipsum commodo reprehenderit minim cupidatat. tetur aute exercitation do. ' />
      <Contacto/>
      <Footer/>
    </div>
  )
}
