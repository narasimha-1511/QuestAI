const bcrypt = require("bcryptjs");
const User = require("../models/user-schema.js");
const generateJWT = require("../utils/generate-token.js");

const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();

    const token = generateJWT(newUser._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 1000,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "Invalid Email" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.json({ error: "Invalid credentials" });
    }

    const token = generateJWT(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 1000,
    });

    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in", error: error.message });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { signup, login, logout };
