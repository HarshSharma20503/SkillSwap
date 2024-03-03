import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
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
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`} style={{ fontFamily: 'Josefin Sans, sans-serif', color: '#2d2d2d' }}>SkillSwap</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about_us" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/why_skillswap" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                  Why SkillSwap
                </Nav.Link>
                <Nav.Link as={Link} to="/login" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2d2d2d' }}>
                  Login/Register
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
