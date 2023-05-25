import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import '../CSS/MyNav.css'
export class MyNav extends Component {
  render() {
      return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="Brand" href="#home">Furnitchy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" id="left-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#offers">offers</Nav.Link>
                        <NavDropdown title="Blog" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Living Room</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Bedroom
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Kitchens</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action/3.4">
                                Dining room
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
              </Navbar>
          </div>
    )
  }
}
