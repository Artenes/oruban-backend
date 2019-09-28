import { Router } from 'express';

import auth from './middlewares/auth';

const router = Router();

// any route below this will be auth protected
router.use(auth);

router.get('/', (req, res) => {
  return res.json({ message: 'okidoki' });
});

export default router;
