import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav,NavDropdown,Navbar,Container,Button } from 'react-bootstrap';
import "./Header.css"

const navBrandStyle = {
    color: "rgb(255,255,255)",
    fontFamily: "Bangers, serif",
    fontSize: "27px"
};
const navItemStyle = {
    color: "rgb(255,255,255)",
};

const Header= () => (


<Navbar collapseOnSelect expand="lg"  variant="dark" sticky="top">
  <Container>
  <Navbar.Brand href="#home" style= {navBrandStyle} >Sami Grill</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link  className="nav-item" href="#features" style = {navItemStyle}>  Home</Nav.Link>
      <Nav.Link  className="nav-item" href="#pricing" style = {navItemStyle}>Menu</Nav.Link>
      <Nav.Link  className="nav-item" href="#dailyDeals" style = {navItemStyle}>Daily Deals</Nav.Link>

      <NavDropdown title="Contact Us" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#action/3.1">About us </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Whatsapp</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Support</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#login">Log in</Nav.Link>
      <Button  className="nav-button"  href="#memes">
        Sign up
      </Button  >
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
export default Header;