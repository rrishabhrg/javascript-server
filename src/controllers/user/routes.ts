import Controls from './Controller';
import * as express from 'express';
import UserModel from '../../repositories/user/UserModel';
import { Control } from '..';

Object.freeze(Controls);
const userRouter = express.Router();

userRouter.post('/create', Control.createUser);
userRouter.get('/:id', Control.readUser);
userRouter.put('/:id/update', Control.updateUser);
userRouter.delete('/:id/delete', Control.deleteUser);

export { userRouter };
