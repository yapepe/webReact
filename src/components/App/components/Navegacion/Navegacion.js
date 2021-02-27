import './assets/Navegacion.css'
import { List } from 'react-bootstrap-icons'
import { useRef, useEffect } from 'react'

export default function Navegacion({logo}) {

  const refDesplegable = useRef(null)
  const refComprimido = useRef(null)

  useEffect( () => {
    
    document.addEventListener('scroll', () => {
      if(window.scrollY > 80){
        refComprimido.current.classList.add('navegacion--comprimida')
        if(refDesplegable.current.classList.contains('links--desplegable')){
          refDesplegable.current.classList.add('links--desplegable--despues')
        }
        return
      }
      if(window.scrollY <= 80 && refComprimido.current.classList.contains('navegacion--comprimida')){
        refComprimido.current.classList.remove('navegacion--comprimida')
        refDesplegable.current.classList.remove('links--desplegable--despues')
        return
      }
    })
  }, [] )

  const menu = () => {
    refDesplegable.current.classList.toggle('links--desplegable')
    if(refComprimido.current.classList.contains('navegacion--comprimida')){
      refDesplegable.current.classList.add('links--desplegable--despues')
    }
  }

  return (
    <div className="navegacion" ref={refComprimido}>
      <div className="logo"><img src={logo}/></div>
      <div><List className="navegacion__icono" onClick={ () => menu() } /></div>
      <div className="links" ref={refDesplegable}>
        <div className="links__link">NONONO</div>
        <div className="links__link">NONONO2</div>
        <div className="links__link">NONONO3</div>
      </div>
    </div>
  )
}
