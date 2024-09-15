const express = require('express');
const cors = require('cors');
const getAccessToken = require('./accessToken');
const router = require('./routes');
require('./connection');

const app = express(); // Creation of express server
app.use(cors());
app.use(express.json()); // Middleware to parse JSON format
app.use(router);

const PORT = 4000 || process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Server is running at port: ${PORT}`);
 
  
});
