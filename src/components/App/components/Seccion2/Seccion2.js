import './assets/Seccion2.css'
import { Container, Row, Col } from 'react-bootstrap'
import { EmojiHeartEyesFill } from 'react-bootstrap-icons'
import { LightningFill } from 'react-bootstrap-icons'
import { Hammer } from 'react-bootstrap-icons'


  export default function Seccion2() {
      return (
          
        <div className="seccion2">
          <div className="seccion2__contenido">
            <Container fluid>
                  <Row>
                    <Col lg={4}>
                      <EmojiHeartEyesFill className="seccion2__iconos" />
                      <h1>Hechas a mano</h1>
                      <p>Todas nuestras páginas web, desde la mas sencilla 
                        hasta la mas compleja están hechas desde cero y en
                        función de las necesidades de tu empresa</p>
                    </Col>

                        <Col lg={4}>
                        <LightningFill className="seccion2__iconos"  />
                          <h1>Optimizadas</h1>
                          <p>Para usted y para nosotros el tiempo es oro. 
                            Garantizamos la mejor velocidad de carga para que no pierdas a ninguno de tus clientes</p>
                        </Col>

                          <Col lg={4}>
                            <Hammer className="seccion2__iconos"  />
                            <h1>Sin Fallos</h1>
                            <p>Nuestras páginas web pasan por las pruebas 
                              de calidad más robustas, para que te preocupes 
                              en potencializar tus ventas y no por cosas 
                              técnicas</p>
                          </Col>
                  </Row>
              </Container>
            </div>
        </div>
      )
    }