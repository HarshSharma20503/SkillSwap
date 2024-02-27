import jwt from "jsonwebtoken";

const generateJWTToken = (user) => {
  console.log(user);
  const payload = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }); // Example expiration time of 1 hour
};

export default generateJWTToken;
