import { Router } from 'express';
import clientesControllers from '../controllers/cliente';

const router = Router();

router.get('/getAll', clientesControllers.getAll);
router.get('/:id', clientesControllers.getById);
// router.post('/', clientesControllers.createUsuario);
// router.put('/:id', clientesControllers.updateUsuario);
// router.delete('/:id', clientesControllers.deleteUsuario);


export default router;