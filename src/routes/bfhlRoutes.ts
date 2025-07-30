import { Router } from 'express';
import { BFHLController } from '../controllers/bfhlController';
import { validateBFHLRequest } from '../middleware/validation';

const router = Router();

router.post('/bfhl', validateBFHLRequest, BFHLController.processBFHLData);


router.get('/health', BFHLController.healthCheck);

export default router;
