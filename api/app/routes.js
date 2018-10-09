import express from 'express';

import { images } from './controllers';

const router = express.Router();

router.get('/images', images.index);
router.put('/images/:id', images.update);

router.use((req, res) => {
  res.json({ error: 404 });
});

export default router;
