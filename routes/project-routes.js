const express = require('express');
const { createProject , fetchProjects } = require('../controllers/projects-controller.js');
const authMiddleware = require('../middleware/auth-middleware.js');

const projectRoutes = express.Router();

projectRoutes.use(authMiddleware);

projectRoutes.post('/create', createProject);
projectRoutes.get('/', fetchProjects);


module.exports = { projectRoutes };


