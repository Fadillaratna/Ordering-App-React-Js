import React from 'react';
import { Nav, Navbar, NavDropdown, Form, Button, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <div>
      <>
        <Navbar variant="dark" className="navbar navbar-expand-lg py-3 shadow-sm">
          <Container>
            <Navbar.Brand href="#home" className="navbar-brand fw-bold fs-4">Arari Ovene</Navbar.Brand>
            <Nav className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />

      </>
    </div>
  );
};

export default NavbarComponent;