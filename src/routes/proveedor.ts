import { Router } from 'express';
import proveedorController from '../controllers/proveedor';

const router = Router();

router.get('/all', proveedorController.getAll);
router.get('/:id', proveedorController.getById);
// router.post('/', proveedorController.createUsuario);
// router.put('/:id', proveedorController.updateUsuario);
// router.delete('/:id', proveedorController.deleteUsuario);


export default router;