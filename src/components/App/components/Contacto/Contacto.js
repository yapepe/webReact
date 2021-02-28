import './assets/Contacto.css'
import {Form, Button , Col} from 'react-bootstrap'
import { useState } from 'react'

export default function Contacto() {
  const [ nombre, setNombre ] = useState(' ')
  const [ email, setEmail ] = useState(' ')
  const [ telefono, setTelefono ] = useState(' ')
  const [ mensaje, setMensaje ] = useState(' ')
  const asunto = 'CONTACTO WEB'
  const url = 'https://solipsi-landing-server.herokuapp.com/contacto'

  const enviarMail = () => {
    if(nombre === ' ' || email === ' ' || telefono === ' '){
      return
    }
    const datos = {   
      nombre:nombre,
      email:email ,
      telefono:telefono,
      mensaje:mensaje,
      asunto:asunto
    } 
    const res = fetch(url, {
      method: 'POST', 
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(datos)
    })
    .then(() => {
      alert('e-mail enviado con éxito')
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="contacto-web">
        <h1>Ffffffffffffffffffffffffffff</h1>
        <p>fffffffffffffffffffffffffffffffffffff.  fffff ffff fffffffff fff ff f f f ff fffffffffffff </p>
        <h1>Contacto</h1>
        <br />
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="Nombre" className="contacto-web__formulario--chico" 
                onChange = { (event) => setNombre(event.target.value) }
              />
              <Form.Control type="email" placeholder="Email" className="contacto-web__formulario--chico" 
              onChange = { (event) =>  setEmail(event.target.value)   }
              />
              <Form.Control type="text" placeholder="Telefono" className="contacto-web__formulario--chico" 
              onChange = { (event) =>  setTelefono(event.target.value)  }
              //meter REQUERIDO
              />
            </Form.Group>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={5} placeholder="Mensaje" className="contacto-web__formulario--grande" 
                onChange = { (event) => setMensaje(event.target.value) }
                />
              </Form.Group>
          </Form.Row>
          <br />
          <Button variant="dark" onClick={ () => enviarMail() } >
            Submit
          </Button>
        </Form>
    </div>
  )
}