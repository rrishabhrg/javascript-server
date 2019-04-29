import { HEAD_TRAINER, TRAINEE, TRAINER } from '../../constants';
import { IhasPermission } from '../../interfaces'

let permission: object = {
  'getUsers': {
    all : [HEAD_TRAINER],
    read : [TRAINEE, TRAINER],
    write : [TRAINER],
    delete: [],
  }
}

let hasPermission: IhasPermission;
hasPermission = function (moduleName: string, role: string, permissionType: string) {
  return(permission[moduleName]['all'].indexOf(role)!==-1 || permission[moduleName][permissionType].indexOf(role)!==-1);
}

export { hasPermission };
