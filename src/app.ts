import dotenv from 'dotenv';
import express from 'express';

import rol from './routes/rol';
import rrhh from './routes/rrhh';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/rol', rol);
app.use('/api/rrhh', rrhh);

const port = process.env.SERVER_PORT || 3000;

app.get('/', (_req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
