const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is some data from the API!',
    timestamp: new Date()
  };
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
