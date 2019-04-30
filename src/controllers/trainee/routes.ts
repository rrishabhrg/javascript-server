import * as express from 'express';
import { default as Controls } from './Controller';

Object.freeze(Controls);  //{Freezing the object of Control class.}

const router = express.Router();

router.get('/get', Controls.get);
router.post('/post', Controls.post);
router.put('/put', Controls.put);
router.delete('/delete', Controls.delete);
//router.post('/post', cehck(email.isemail(0)), Controls.delete);

export { router };
