import dotenv from 'dotenv';
import express from 'express';
import tokenVerify from './middleware/tokenVerify';
import cors from 'cors';

import rol from './routes/rol';
import rrhh from './routes/rrhh';
import usuario from './routes/usuario';
import auth from './routes/auth';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/rol', tokenVerify, rol);
app.use('/api/rrhh', tokenVerify, rrhh);
app.use('/api/usuario', tokenVerify, usuario);
app.use('/api/auth', auth);

const port = process.env.SERVER_PORT || 3000;

app.get('/', (_req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
