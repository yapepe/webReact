import './assets/Seccion1.css'
import Button from 'react-bootstrap/Button'


export default function Seccion1({ titulo, p }) {
    return (
      <div className="seccion1">
        <div className="seccion1__contenido">
        <h1>{titulo}</h1>
        <p>{p}</p>
        <Button variant="dark" size="lg" >👽👽👽👽👽</Button>
        </div>
      </div>
    )
  }