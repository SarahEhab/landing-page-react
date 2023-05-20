import React from "react";
import {Navbar , Container , Nav  ,Button } from 'react-bootstrap'
import './Navs.css'

const Navs = () =>{
    return (
<Navbar collapseOnSelect  className="sticky-top" expand="lg"  >
      <Container>
        <Navbar.Brand href="#home">DORSIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          
          </Nav>
       
            <Button >Try It Free</Button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navs