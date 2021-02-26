import './assets/Navegacion.css'

export default function Navegacion({logo}) {
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

