import logo from './logo.svg';
import './App.css';
import {Hasil, ListCategories, NavbarComponent} from './component';
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4 className="fw-bold fs-4">Products</h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
