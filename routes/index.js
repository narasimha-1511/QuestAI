const express = require("express");

const { projectRoutes } = require("./project-routes.js");
const { authRoutes } = require("./auth-routes");
const { fileRoutes } = require("./file-routes");

const router = express.Router();

router.use("/project", projectRoutes);
router.use("/auth", authRoutes);
router.use("/file", fileRoutes);

module.exports = { router };
