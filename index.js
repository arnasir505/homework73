const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const password = 'ILoveReact';

app.get('/', (_req, res) => {
  res.send('Home\n');
});

app.get('/Hello', (_req, res) => {
  res.send('Hello!\n');
});

app.get('/encode/:message', (req, res) => {
  const encoded = Vigenere.Cipher(password).crypt(req.params.message);
  res.send(`Encoded message: ${encoded}\n`);
});

app.get('/decode/:message', (req, res) => {
  const decoded = Vigenere.Decipher(password).crypt(req.params.message);
  res.send(`Decoded message: ${decoded}\n`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}\n`);
});
