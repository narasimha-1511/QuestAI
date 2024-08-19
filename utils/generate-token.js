const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateJWT = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = generateJWT;
