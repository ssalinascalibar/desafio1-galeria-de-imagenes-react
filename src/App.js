import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //importación de bootstrap
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import londres from './assets/img/londres.jpg'
import paris from './assets/img/paris.jpg'
import roma from './assets/img/roma.jpg'

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Header title="Galería de Imágenes con React"/>
      <hr/>
      <Row>
        <Col md={{ span: 6, offset: 3 }}><Card image={londres} city="Londres" description="Inglaterra"/></Col> 
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}><Card image={paris} city="Paris" description="Francia"/></Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}><Card image={roma} city="Roma" description="Italia"/></Col>
      </Row>
      <hr/>
      <Footer footerText="Todos los derechos reservados" footerDate="2022"/>
    </Container>
  );
}

export default App;
