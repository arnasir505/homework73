const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;
const password = 'ILoveReact';
const fontStyle = 'font-family: Arial, sans-serif;';

app.get('/', (_req, res) => {
  res.send(`<h1 style="${fontStyle}">Home</h1>\n`);
});

app.get('/Hello', (_req, res) => {
  res.send(`<h1 style="${fontStyle}">Hello!</h1>\n`);
});

app.get('/encode/:message', (req, res) => {
  const encoded = Vigenere.Cipher(password).crypt(req.params.message);
  res.send(`<h1 style="${fontStyle}">Encoded message: ${encoded}</h1>\n`);
});

app.get('/decode/:message', (req, res) => {
  const decoded = Vigenere.Decipher(password).crypt(req.params.message);
  res.send(`<h1 style="${fontStyle}">Decoded message: ${decoded}</h1>\n`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}\n`);
});
