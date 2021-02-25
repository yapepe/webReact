import './assets/Navegacion.css'
import logo from './assets/img/alien.png'

export default function Navegacion() {
  return (
    <div className="navegacion">
      <div className="logo"><img src={logo}/></div>
      <div className="links">
        <div className="links__link">NONONO</div>
        <div className="links__link">NONONO2</div>
        <div className="links__link">NONONO3</div>
      </div>
    </div>
  )
}

