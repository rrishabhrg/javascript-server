import { hasPermission } from '../routes/../../../extraTs/patterns/../utils/permissions/permissions';
import { config } from '../routes/../../config';
import * as jwt from 'jsonwebtoken';

export const authMiddleWare = (moduleName, permissionType) => (req, res, next) => {
  let token = req.header('Authorization');
  if(token){
    jwt.verify(token, config.KEY, (err, req) => {    //KEY(qwertyuiopasdfghjklzxcvbnm123456)
      if(err){
        return next({
          error: 'Forbidden',
          message: 'Token is not verified.',
          status: 403
        })
      }
      else{
        if(hasPermission(moduleName, req.role, permissionType)){
          res.send('Authorized Access.');
        }
        else{
          return next({
            error: 'Forbidden',
            message: 'Unauthorized Access.',
            status: 403
          })
        }
      }
    })
  }
  else{
    return next({
      error: 'Forbidden',
      message: 'Token is empty.',
      status: 403
    })
  }
}
