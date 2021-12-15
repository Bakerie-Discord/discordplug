
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from "../static/logo.png" 
export default function NavMenu() {
    return <Navbar id="nv-1" collapseOnSelect expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className="relativeTest">
          <img
            alt=""
            src={logo}
            className="d-inline-block align-top brand-ico"
          />{' '}
          <div id="winky"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="me-5" href="#changelogs">Changelogs</Nav.Link>
            <Nav.Link className="me-5" href="#features">Features</Nav.Link>
            <Nav.Link className="me-5" href="#tos">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
}