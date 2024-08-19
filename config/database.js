const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = () => {
  return mongoose
    .connect(process.env.MONGODB_URL)
    .then((res) => {
      console.log("MongoDB connected");
      return "MongoDB connected";
    })
    .catch((err) => {
      console.log("Failed to connect MongoDB", err);
      throw err;
    });
};

module.exports = connectToDatabase;
