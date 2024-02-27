import generateJWTToken from "../utils/generateJWTToken.js";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);

export const googleAuthHandler = passport.authenticate("google", { scope: ["profile", "email"] });

export const googleAuthCallback = passport.authenticate("google", {
  failureRedirect: "http://localhost:5173/login",
  session: false,
});

export const handleGoogleLoginCallback = async (req, res) => {
  const existingUser = await User.findOne({ email: req.user._json.email });

  if (!existingUser) {
    await User.create({
      email: req.user._json.email,
      name: req.user._json.name,
    });
  }

  const jwtToken = generateJWTToken(req.user._json);
  const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
  res.cookie("accessToken", jwtToken, { httpOnly: true, expires: expiryDate, secure: false });
  res.redirect("http://localhost:5173/");
};
