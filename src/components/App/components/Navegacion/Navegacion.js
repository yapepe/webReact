import './assets/Navegacion.css'
import { List } from 'react-bootstrap-icons'
import { useRef, useEffect } from 'react'

export default function Navegacion({logo}) {

  const refDesplegable = useRef(null)
  const refComprimido = useRef(null)
  const refCerrado = useRef(null)

  useEffect( () => {

    window.onresize = () => {
      if(refDesplegable.current.classList.contains('navegacion__links--desplegable')
      && window.innerWidth > 760 ){
        refDesplegable.current.classList.remove('navegacion__links--desplegable')
        refCerrado.current.classList.remove('navegacion__cerrar--despues')
      }
      
      if(refDesplegable.current.classList.contains('navegacion__links--desplegable--despues')
      && window.innerWidth > 760 ){
        refDesplegable.current.classList.remove('navegacion__links--desplegable--despues')
      }

    }
    
    document.addEventListener('scroll', () => {
      if(window.scrollY > 80){
        refComprimido.current.classList.add('navegacion--comprimida')
        if(refDesplegable.current.classList.contains('navegacion__links--desplegable')){
          refDesplegable.current.classList.add('navegacion__links--desplegable--despues')
        }
        return
      }
      if(window.scrollY <= 80 && refComprimido.current.classList.contains('navegacion--comprimida')){
        refComprimido.current.classList.remove('navegacion--comprimida')
        refDesplegable.current.classList.remove('navegacion__links--desplegable--despues')
        return
      }
    })
  }, [] )

  const abrirDesplegable = () => {
    refCerrado.current.classList.add('navegacion__cerrar--despues')
    refDesplegable.current.classList.toggle('navegacion__links--desplegable')

    if(refComprimido.current.classList.contains('navegacion--comprimida')){
      refDesplegable.current.classList.add('navegacion__links--desplegable--despues')
    }
  }

  const cerrarDesplegable = () => {
    refCerrado.current.classList.remove('navegacion__cerrar--despues')
    refDesplegable.current.classList.remove('navegacion__links--desplegable')
    refDesplegable.current.classList.remove('navegacion__links--desplegable--despues')
  }

  return (
    <div className="navegacion" ref={refComprimido}>
      <div className="navegacion__logo"><img src={logo} alt="logo de solipsi rai"/></div>
      <div><List className="navegacion__icono" onClick={ () => abrirDesplegable() } /></div>
      <div className="navegacion__cerrar" onClick={ () => cerrarDesplegable() } ref={refCerrado} ></div>
      <div className="navegacion__links" ref={refDesplegable}>
        <div className="navegacion__links__link">NONONO</div>
        <div className="navegacion__links__link">NONONO2</div>
        <div className="navegacion__links__link">NONONO3</div>
      </div>
    </div>
  )
}
