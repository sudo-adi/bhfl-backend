import { Router } from 'express';
import bfhlRoutes from './bfhlRoutes';

const router = Router();

// Mount routes
router.use('/', bfhlRoutes);

// Root endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'BFHL API is running',
    version: '1.0.0',
    endpoints: {
      bfhl: 'POST /bfhl',
      health: 'GET /health',
    },
  });
});

export default router;
