import React from "react";
import { Nav, NavDropdown, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import ButtonCartCount from "../ButtonCartCount";
const navBrandStyle = {
  color: "rgb(255,255,255)",
  fontFamily: "Bangers, serif",
  fontSize: "27px",
};
const navItemStyle = {
  color: "rgb(255,255,255)",
};
const btnStyle = {
  borderRadius: "12px",
  background: "#790a0a",
};
/*
nav bar component called the header 
*/
const Header = React.memo(function Header() {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} style={navBrandStyle}>
          Sami Grill
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="nav-item"
              onClick={() => navigate("/")}
              style={navItemStyle}
            >
              {" "}
              صفحة رئيسية
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              onClick={() => navigate("/menu")}
              style={navItemStyle}
            >
              قائمة الطعام
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              onClick={() => navigate("/daily-deals")}
              style={navItemStyle}
            >
              التخفيضات اليومية
            </Nav.Link>
            <NavDropdown title="تواصل معنا" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate("/about-us")}>
                عن المطعم{" "}
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://wa.me/972525509109"
                target="_blank"
              >
                واتساب
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/support")}>
                دعم فني
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              variant="danger"
              style={btnStyle}
              onClick={() => navigate("/special-order")}
            >
              الطلبات الخاصة
            </Button>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate("/login")}>تسجيل الدخول</Nav.Link>
            <Button
              className="nav-button"
              onClick={() => navigate("/signup")}
              style={btnStyle}
            >
              اشتراك
            </Button>
          </Nav>
          <Nav>
            <ButtonCartCount />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});
export default Header;
