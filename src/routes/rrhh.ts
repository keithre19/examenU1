import { Router } from 'express';
import RrhhController from '../controllers/rrhh';

const router = Router();

router.post('/', RrhhController.createRrhh);
router.put('/:id', RrhhController.updateRrhh);
router.delete('/:id', RrhhController.deleteRrhh);
router.get('/all', RrhhController.getRrhhList);
router.get('/:id', RrhhController.getRrhh);


export default router;