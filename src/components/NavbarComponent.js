import React from "react";
import {Nav, Navbar, NavDropdown, Container, Row, } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" className="navbar navbar-expand-lg py-3 shadow-sm">
      <Container>
        {/* <Row className="d-flex justify-content-center"> */}
        <Navbar.Brand href="#home" className="navbar-brand fw-bold fs-4 text-center">Arari Ovene</Navbar.Brand>
        {/* </Row> */}
        
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
