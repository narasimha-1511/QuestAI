const express = require('express');

const { signup, login, logout } =  require('../controllers/auth-controller.js');
const authMiddleware = require('../middleware/auth-middleware.js');

const authRoutes = express.Router();

authRoutes.post('/signup', signup);
authRoutes.post('/login', login);
authRoutes.post('/logout', logout);
authRoutes.get('/verify-token', authMiddleware, (req , res) => {
    res.status(200).json({ message: 'Token is valid' , user: req.user});
});

module.exports = { authRoutes };