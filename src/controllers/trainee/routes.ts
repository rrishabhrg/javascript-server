import * as express from 'express';
import TraineeController from './Controller';
import validator from '../../valid';
import schema from '../../mySchema';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';

Object.freeze(TraineeController);
const traineeRouter = express.Router();

traineeRouter.get('/get', TraineeController.get);
traineeRouter.post('/post', TraineeController.post);
traineeRouter.put('/update', TraineeController.put);
traineeRouter.delete('/delete', TraineeController.delete);
traineeRouter.post('/schema-test', validator(schema.post), TraineeController.schemaCheck);
traineeRouter.post('/token-test', authMiddleWare('getUsers', 'read'), TraineeController.post);

export { traineeRouter };
