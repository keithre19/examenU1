import dotenv from 'dotenv';
import express from 'express';

import rol from './routes/rol';

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/rol', rol);



const port = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
