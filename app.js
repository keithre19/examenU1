require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
