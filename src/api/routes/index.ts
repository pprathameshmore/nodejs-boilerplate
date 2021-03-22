import { Router } from 'express';
const router = Router();

import usersRouter from './modules/users';

router.use('/v1/users', usersRouter);

export default router;
