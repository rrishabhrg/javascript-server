import * as express from 'express';
import UserController from './Controller';

Object.freeze(UserController);
const userRouter = express.Router();

userRouter.post('/create', UserController.post);
userRouter.get('/:id', UserController.get);
userRouter.put('/:id/update', UserController.put);
userRouter.delete('/:id/delete', UserController.delete);

export { userRouter };
