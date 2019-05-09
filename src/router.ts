import { traineeRouter, userRouter } from './controllers';
import * as express from 'express';

const trainee_routes = express.Router();
trainee_routes.use('trainee', traineeRouter);

const user_routes = express.Router();
user_routes.use('user', userRouter);

export { traineeRouter, userRouter };
