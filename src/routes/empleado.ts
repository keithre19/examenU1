import { Router } from 'express';
import { EmpleadoController } from '../controllers/empleado';

const router = Router();

router.get('/all', EmpleadoController.getEmpleados);
router.get('/:id', EmpleadoController.getEmpleadoById);
router.post('/', EmpleadoController.createEmpleado);
router.put('/:id', EmpleadoController.updateEmpleado);
router.delete('/:id', EmpleadoController.deleteEmpleado);

export default router;