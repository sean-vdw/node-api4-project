require('dotenv').config();
const express = require('express');

const server = express();
server.use(express.json());

// Users
const users = [
  { id: 1, username: 'Kyle', password: 'asdfgh'},
  { id: 2, username: 'Stan', password: 'iheartwendy'},
  { id: 3, username: 'Kenny', password: 'mmmmhmm'},
];
// Endpoints
server.get('/api/users', (req, res) => {
  res.json(users)
});

server.post('/api/register', (req, res) => {
  const newUser = {
    id: users.length + 1,
    username: req.body.username,
    password: req.body.password
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

server.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const validUser = users.some(el => {
    if (el.username === username && el.password === password) {
      return true;
    }
  });
  validUser ? res.json({ message: "Welcome to the App!"}) : res.status(400).json({ message: "Please enter a valid username and password" });
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});