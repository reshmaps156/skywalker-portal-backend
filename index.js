const express = require('express');
const cors = require('cors');
const router = require('./routes');
require('./connection');

const app = express(); 
app.use(cors());
app.use(express.json()); 
app.use(router);

const PORT = 4000 || process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Server is running at port: ${PORT}`);
 
  
});
