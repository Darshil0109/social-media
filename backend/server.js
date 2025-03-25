require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

// Configure CORS for React frontend
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

// Middleware to parse JSON
app.use(express.json());

// Sample data
let tasks = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a Node API" }
];

// GET all tasks
app.get('/', (req, res) => {
    res.send("Hello This Is api")
})
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST a new task
// app.post('/api/tasks', (req, res) => {
//   const newTask = {
//     id: tasks.length + 1,
//     text: req.body.text
//   };
//   tasks.push(newTask);
//   res.status(201).json(newTask);
// });

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});