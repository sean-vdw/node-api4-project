require('dotenv').config();
const express = require('express');

const server = express();

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});