const jwt = require('jsonwebtoken');
const User = require('../models/user-schema.js');
require('dotenv').config();


 const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select('-password');
      if(!user){
        return res.status(401).json({ error: 'Unauthorized: User not found' });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
  };

  module.exports = authMiddleware;