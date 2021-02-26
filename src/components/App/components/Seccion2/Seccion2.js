import './assets/Seccion2.css'
import { Container, Row, Col } from 'react-bootstrap'

  export default function Seccion2({ titulo, p, titulo2, p2, titulo3, p3 }) {
      return (
          
        <div className="seccion2">
          <div className="seccion2__contenido">
            <Container fluid>
                  <Row>
                    <Col lg={4}>
                      <h1>{titulo}</h1>
                      <p>{p}</p>
                    </Col>

                        <Col lg={4}>
                          <h1>{titulo2}</h1>
                          <p>{p2}</p>
                        </Col>

                          <Col lg={4}>
                            <h1>{titulo3}</h1>
                            <p>{p3}</p>
                          </Col>
                  </Row>
              </Container>
            </div>
        </div>
      )
    }