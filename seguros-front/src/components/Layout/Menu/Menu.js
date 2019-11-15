import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./style.scss";

export default class Menu extends Component {
  render() {
    return (
      <div className="max-w">
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand href="/">Team Seguros</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link href="/users">Usuario</Nav.Link>
              <Nav.Link href="/seguro">Seguro</Nav.Link>
              <Nav.Link href="/contact">Contactenos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
