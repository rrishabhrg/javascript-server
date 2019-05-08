import * as express from 'express';
import Controls from './Controller';
import validator from '../../valid';
import schema from '../../mySchema';

Object.freeze(Controls);  //{Freezing the object of Control class.}x

const traineeRouter = express.Router();

traineeRouter.get('/get', Controls.get);
traineeRouter.post('/post', Controls.post);
traineeRouter.put('/update', Controls.put);
traineeRouter.delete('/delete', Controls.delete);

traineeRouter.post('/schema-test', validator(schema.post), Controls.schemaCheck);

export { traineeRouter };
