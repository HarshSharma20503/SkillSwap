const Login = () => {
  // const [message, setMessage] = useState("");

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      {/* <p>{message}</p> */}
    </div>
  );
};

export default Login;
