import { hasPermission } from '../../../extraTs/utils';
import { config } from '../routes/../../config';
import * as jwt from 'jsonwebtoken';

export const authMiddleWare = (moduleName: any, permissionType: any) => (req, res, next) => {
  let token = req.header('Authorization');
  if(token){
    jwt.verify(token, config.TOKEN_KEY, (err) => {
      if(err){
        next({
          error: 'Forbidden',
          message: 'Token Is Not Verified.',
          status: 403
        })
      }
      else{
        if(hasPermission(moduleName, req.role, permissionType)){
          res.send('Authorized Access.');
        }
        else{
          console.log(moduleName);
          console.log(req.role);
          console.log(permissionType);
          // console.log(hasPermission(moduleName, req.role, permissionType));
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
