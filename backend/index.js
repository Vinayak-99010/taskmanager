
const express = require('express');
const app = express();
app.get('/api', (req, res) => {
  res.json({ message: 'Task Manager Backend API' });
});
app.listen(5000, () => console.log('Server running on port 5000'));
