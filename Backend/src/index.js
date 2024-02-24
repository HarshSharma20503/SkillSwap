import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// experiment
import passport from "passport";
// import session from "express-session";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import { User } from "./models/user.model.js";

app.use(passport.initialize());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback", // This should match with the authorized redirect URI
    },
    async (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

function generateJWTToken(user) {
  console.log(user);
  const payload = {
    id: user.id,
    email: user.email,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" }); // Example expiration time of 1 hour
}

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

const secureFlag = process.env.NODE_ENV === "production";
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
    session: false,
  }),
  async (req, res) => {
    const existingUser = await User.findOne({ email: req.user._json.email });

    if (!existingUser) {
      await User.create({
        email: req.user._json.email,
        name: req.user._json.name,
      });
    }

    const jwtToken = generateJWTToken(req.user._json);
    const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day in milliseconds
    res.cookie("userDetails", jwtToken, { httpOnly: true, expires: expiryDate, secure: false });

    // Redirect to home page or dashboard
    res.redirect("http://localhost:5173/");
  }
);

function verifyJWTToken(req, res, next) {
  console.log(req);
  const token = req.cookies.userDetails; // Assuming JWT token is stored in a cookie
  console.log("token", token);
  console.log("req.cookies", req.cookies);
  if (!token) {
    return res.status(200).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded; // Attach user object to request
    next();
  });
}

app.get("/protected-route", verifyJWTToken, (req, res) => {
  // If JWT token is verified, user is authenticated and authorized
  res.json({ message: "Authenticated and authorized" });
});

app.get("/user", verifyJWTToken, async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  res.status(200).json(user);
});

app.get("/test", (req, res) => {
  console.log("Inside test route");

  return res.status(200).cookie("test", "heelo", { httpOnly: true }).send("Hello");
});
