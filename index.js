const express = require('express');
const app = express();
const port = 8000;

app.get('/Hello', (_req, res) => {
  res.send('Hello!\n');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:8000`);
});
