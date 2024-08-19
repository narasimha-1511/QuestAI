const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDatabase = require('./config/database.js');
const { router } = require('./routes/index.js');
const path = require('path');

// this is for envs
require('dotenv').config();

const app = express();
const Port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.static('./frontend/dist'));

app.use(
  cors({
    origin: true, 
    credentials: true,
  })
);

// Router for api
app.use('/api', router);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/dist/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/dist/index.html'));
});

// starting server
(function(){
  connectDatabase()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server is Started on Port: ${Port}`);
    });
  })
  .catch((err) => {
    console.log("Unable to Start the Server " , err);
  });
}());


