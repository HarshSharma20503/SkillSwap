import jwt from "jsonwebtoken";

const generateJWTToken_email = (user) => {
  console.log("\n******** Inside GenerateJWTToken_email Function ********");
  // console.log(user);
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }); // Example expiration time of 1 hour
};

const generateJWTToken_username = (user) => {
  console.log("\n******** Inside GenerateJWTToken_username Function ********");
  // console.log(user);
  const payload = {
    id: user._id,
    username: user.username,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }); // Example expiration time of 1 hour
};

export { generateJWTToken_email, generateJWTToken_username };
