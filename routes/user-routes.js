const express = require("express");
const User = require("../models/user-schema.js");

const userRoutes = express.Router();

userRoutes.put("/", async (req, res) => {
  const { userName, email } = req.body;

  const user = await User.findOne({ email });

  user.fullName = userName;

  await user.save();
  res.send("Name updated");
});

module.exports = { userRoutes };
