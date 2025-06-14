const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve all files in the current directory and subfolders
app.use(express.static(__dirname));

// API: Get tasks
app.get('/api/tasks', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'tasks.json'), 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Could not read tasks' });
    res.json(JSON.parse(data));
  });
});

// API: Save tasks
app.post('/api/tasks', express.json(), (req, res) => {
  fs.writeFile(
    path.join(__dirname, 'data', 'tasks.json'),
    JSON.stringify(req.body, null, 2),
    (err) => {
      if (err) return res.status(500).json({ error: 'Could not write tasks' });
      res.json({ message: 'Tasks updated' });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
