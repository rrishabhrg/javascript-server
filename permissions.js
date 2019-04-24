let permission = {
    'getUsers': {
      all : ['head-trainer'],
      read : ['trainee', 'trainer'],
      write : ['trainer'],
      delete: [],
    }
  }
  
  hasPermission = ( moduleName, role, permissionType) => {
    
      return(permission[moduleName]['all'].indexOf(role)!==-1 || 
              permission[moduleName][permissionType].indexOf(role)!==-1);
  
  }
      
  console.log('.........................................');
  console.log(hasPermission("getUsers","trainer","write"));           //true
  console.log(hasPermission("getUsers","trainer","read"));           //true
  console.log(hasPermission("getUsers","trainer","delete"));          //false
  console.log(hasPermission("getUsers","trainee","write"));          //false
  console.log(hasPermission("getUsers","trainee","read"));           //true
  console.log(hasPermission("getUsers","trainee","delete"));          //false
  console.log(hasPermission("getUsers","head-trainer","write"));     //true
  console.log(hasPermission("getUsers","head-trainer","read"));      //true
  console.log(hasPermission("getUsers","head-trainer","delete"));     //true