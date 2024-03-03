import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useUser } from "../../util/UserContext";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    href=""
    ref={ref}
    onClick={(e) => {
      onClick(e);
    }}
    style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
  >
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        overflow: "hidden",
        marginRight: "10px",
      }}
    >
      <img
        src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OGGLXAIY4ZLCFGM3NYFG37OXRQ.jpg" // Replace with your image URL
        alt="User Avatar"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    {children}
    &#x25bc;
  </div>
));

const CustomMenu = React.forwardRef(({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
  const [value, setValue] = useState("");

  return (
    <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
      <ul className="list-unstyled">
        {React.Children.toArray(children).filter(
          (child) => !value || child.props.children.toLowerCase().startsWith(value)
        )}
      </ul>
    </div>
  );
});

const UserProfileDropdown = () => {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    // Perform logout logic
    localStorage.removeItem("user");
    setUser(null);
    const response = await axios.get("/auth/logout");
    // Other logout actions such as clearing local storage and redirecting
  };

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item onClick={() => console.log("Profile clicked")}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Header = () => {
  const { user } = useUser();

  return (
    <>
      <Navbar key="md" expand="md" className="bg-body-primary" style={{ backgroundColor: '#3BB4A1' }}>
        <Container fluid>
          <Navbar.Brand href="/" style={{ fontFamily: 'Josefin Sans, sans-serif', color: '#2d2d2d', fontWeight: 500 }}>SKILL SWAP</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} style={{ fontFamily: 'Josefin Sans, sans-serif', color: '#028477' }}>SKILL SWAP</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                  Home
                </Nav.Link>
                {user ? (
                  <>
                    <Nav.Link as={Link} to="/discover" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                      Discover
                    </Nav.Link>
                    <Nav.Link as={Link} to="/chats" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                      Your Chats
                    </Nav.Link>
                    <Nav.Link as={Dropdown} style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                      <UserProfileDropdown />
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/about_us" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                      About Us
                    </Nav.Link>
                    <Nav.Link as={Link} to="/why_skillswap" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                      Why SkillSwap
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                      Login/Register
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
