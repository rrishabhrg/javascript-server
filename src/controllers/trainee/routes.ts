import * as express from 'express';
import { Controls } from '../trainee';

Object.freeze(Controls);  //{Freezing the object of Control class.}

const router = express.Router();

router.get('/get', Controls.get);
router.post('/post', Controls.post);
router.put('/put', Controls.put);
router.delete('/delete', Controls.delete);

export { router };
