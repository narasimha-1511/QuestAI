const express = require("express");
const authMiddleware = require("../middleware/auth-middleware.js");
const {
  createFile,
  fetchFiles,
  editFile,
  deleteFile,
} = require("../controllers/file-controller.js");

const fileRoutes = express.Router();

fileRoutes.use(authMiddleware);

fileRoutes.post("/:projectId", createFile);
fileRoutes.get("/:projectId", fetchFiles);
fileRoutes.put("/:fileId", editFile);
fileRoutes.delete("/:fileId", deleteFile);

module.exports = { fileRoutes };
