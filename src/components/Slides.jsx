import { Col, Container, Row } from 'react-bootstrap';
import '../styles/slides.scss'; 
import logo from '../assets/logo.jpg';


export default function Slides() {

    return (
        <Container fluid className='slide d-flex justify-content-center align-items-center'>
      <Row>
        <Col className="text-center">
          <h1 className="text-light">Never wait for a table ever again. <br /> Book and skip the queue today!</h1>
       
          <img src={logo} alt="Logo" className="img-fluid mt-5 coin-image" />
        </Col>
      </Row>
    </Container>
  );
}