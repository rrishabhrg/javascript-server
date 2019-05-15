import * as express from 'express';
import TraineeController from './Controller';
import validator from '../../valid';
import schema from '../../mySchema';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';

Object.freeze(TraineeController);
const traineeRouter = express.Router();

traineeRouter.get('/', authMiddleWare('getUsers', 'read'), TraineeController.get);
traineeRouter.post('/', authMiddleWare('getUsers', 'write'), TraineeController.post);
traineeRouter.put('/', authMiddleWare('getUsers', 'write'), TraineeController.put);
traineeRouter.delete('/', authMiddleWare('getUsers', 'delete'), TraineeController.delete);
traineeRouter.post('/token-test', authMiddleWare('getUsers', 'read'), TraineeController.post);
traineeRouter.post('/schema-test', validator(schema.post), TraineeController.schemaCheck);

export { traineeRouter };
