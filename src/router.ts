import { traineeRouter, userRouter } from './controllers';
import * as express from 'express';

const router = express.Router();
router.use('/trainee', traineeRouter);
router.use('/user', userRouter);

export { router };
