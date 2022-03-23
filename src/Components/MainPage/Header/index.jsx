import React, { useState } from "react";
import { Nav, NavDropdown, Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import ButtonCartCount from "../ButtonCartCount";
import { useAuth } from "../../../context/AuthContext";
import Avatar from "@mui/material/Avatar";
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

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
nav bar component called the header with login/signup buttons that changes if login or not
*/
const Header = React.memo(function Header() {
  const navigate = useNavigate();
  //importing user login and data with logut function
  const { currentUser, dataUser, logout } = useAuth();
  //shows profile toolbar
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  //handle progile toolbar if he is login
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
          {!currentUser ? (
            <Nav>
              <Nav.Link onClick={() => navigate("/login")}>
                تسجيل الدخول
              </Nav.Link>
              <Button
                className="nav-button"
                onClick={() => navigate("/signup")}
                style={btnStyle}
              >
                اشتراك
              </Button>
            </Nav>
          ) : (
            <Tooltip title="إدارة الحساب">
              <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                <Avatar
                  sx={{ bgcolor: "#790a0a" }}
                  src={dataUser?.personalImage}
                >
                  {dataUser?.firstName?.charAt(0)?.toUpperCase() ||
                    dataUser?.email?.charAt(0)?.toUpperCase()}
                </Avatar>
                <div
                  style={{
                    color: "rgb(210, 141, 8)",
                    fontSize: "10px",
                    padding: "5px",
                  }}
                >
                  {dataUser?.firstName}
                </div>
              </IconButton>
            </Tooltip>
          )}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            onClick={() => setAnchorEl(null)}
            PaperProps={{
              elevation: 0,
              sx: {
                background: "rgb(210, 141, 8)",
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={() => navigate("/profile")}>
              <Avatar sx={{ bgcolor: "#790a0a" }} src={dataUser?.personalImage}>
                {currentUser?.email?.charAt(0)?.toUpperCase()}
              </Avatar>{" "}
              إدارة الحساب
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => logout()}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              خروج
            </MenuItem>
          </Menu>
          <Nav>
            <ButtonCartCount />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});
export default Header;
