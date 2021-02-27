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
                      <h1>FFFFFF</h1>
                      <p>NONONONONONONONONONON</p>
                    </Col>

                        <Col lg={4}>
                        <LightningFill className="seccion2__iconos"  />
                          <h1>FFFFFF</h1>
                          <p>NONONONONONONONONONON</p>
                        </Col>

                          <Col lg={4}>
                            <Hammer className="seccion2__iconos"  />
                            <h1>FFFFFF</h1>
                            <p>NONONONONONONONONONON</p>
                          </Col>
                  </Row>
              </Container>
            </div>
        </div>
      )
    }