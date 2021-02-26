import './assets/Contacto.css'
import {Form, Button , Col} from 'react-bootstrap'

  export default function Contacto() {
      return (
        <div className="contacto">
          <div className="contacto__contenido">
            <h1>CONTACTO</h1>
            <br />
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="email" placeholder="Nombre" className="formulario--chico" />
                  <Form.Control type="email" placeholder="Email" className="formulario--chico" />
                  <Form.Control type="email" placeholder="Teléfono" className="formulario--chico" />
                </Form.Group>
                  <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                   <Form.Control as="textarea" rows={5} placeholder="Mensaje" className="formulario--grande" />
                  </Form.Group>
              </Form.Row>
              <br />
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      );
    }