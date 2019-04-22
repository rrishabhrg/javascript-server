let permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete : [],
    }
}

hasPermission = ({getUsers,role,permissionType}) => {
    
}