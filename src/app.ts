import dotenv from 'dotenv';
import express from 'express';
import tokenVerify from './middleware/tokenVerify';
import cors from 'cors';

import rol from './routes/rol';
import rrhh from './routes/rrhh';
import usuario from './routes/usuario';
import auth from './routes/auth';
import proveedor from './routes/proveedor';
import clientes from './routes/clientes';
import producto from './routes/producto';
import lote from './routes/lote';
import venta from './routes/venta';
import detalleVenta from './routes/detalleVenta';
import Inventario from './routes/inventario'; 

import proyectoRoutes from './routes/proyecto';
import empleadoRoutes from './routes/empleado';
import asignacionRoutes from './routes/asignacion';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/rol', tokenVerify, rol);
app.use('/api/rrhh', tokenVerify, rrhh);
app.use('/api/usuario', tokenVerify, usuario);
app.use('/api/auth', auth);
app.use('/api/proveedor', proveedor);
app.use('/api/cliente', clientes);
app.use('/api/producto', producto);
app.use('/api/lote', lote);
app.use('/api/venta', venta);
app.use('/api/detalleVenta', detalleVenta);
app.use('/api/inventario', Inventario);

//examen
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/asignacion', asignacionRoutes);


const port = process.env.SERVER_PORT || 3000;

app.get('/', (_req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
