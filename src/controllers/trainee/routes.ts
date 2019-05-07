import * as express from 'express';
import Controls from './Controller';
import validator from '../../valid';
import schema from '../../mySchema';
import { authMiddleWare } from '../../libs/routes/authMiddleWare';

Object.freeze(Controls);
const traineeRouter = express.Router();

traineeRouter.get('/get', Controls.get);
traineeRouter.post('/post', Controls.post);
traineeRouter.put('/update', Controls.put);
traineeRouter.delete('/delete', Controls.delete);

traineeRouter.post('/schema-test', validator(schema.post), Controls.schemaCheck);

traineeRouter.post('/token-test', authMiddleWare('getUsers', 'read'), Controls.post);

export { traineeRouter };
