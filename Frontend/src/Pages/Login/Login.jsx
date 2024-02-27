import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <>
      <div style={{ height: "90%" }} className="d-flex justify-content-center align-items-center ">
        <div style={{ height: "300px" }} className="d-flex flex-column justify-content-between p-3 border rounded">
          <h1 style={{ textDecoration: "underline" }} className="text-center">
            Login
          </h1>
          <div className="h-100 d-flex justify-content-center align-items-center">
            <Button variant="primary" className="mx-auto" onClick={handleGoogleLogin}>
              <FaGoogle />
              &nbsp; Login with Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
