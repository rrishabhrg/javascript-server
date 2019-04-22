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
      
  
  console.log(hasPermission("getUsers","trainer","write"));           //True
  console.log(hasPermission( "getUsers","trainer","write"));          //True
  console.log(hasPermission( "getUsers","trainer","read"));           //True
  console.log(hasPermission( "getUsers","trainee","write"));          //False
  console.log(hasPermission( "getUsers","head-trainer","write"));     //True
  