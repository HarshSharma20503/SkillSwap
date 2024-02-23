import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <>
      <Navbar fixed="bottom" bg="primary" data-bs-theme="dark">
        <Container className="mx-auto w-100 d-flex justify-content-center">
          <div className="text-center">Copyright &copy; 2024 SkillSwap. All rights reserved.</div>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
