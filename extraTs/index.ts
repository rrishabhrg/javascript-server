import {displayPyramid, displayEquiTriangle} from './patterns/index';
import {hasPermission} from './utils/permissions/permissions';
import {validateUsers} from './utils/validation/validation';

displayPyramid('5');
displayEquiTriangle('6');

console.log('.............................................................................');
console.log(hasPermission("getUsers","trainer","write"));          //true
console.log(hasPermission("getUsers","trainer","read"));           //true
console.log(hasPermission("getUsers","trainer","delete"));         //false
console.log(hasPermission("getUsers","trainee","write"));          //false
console.log(hasPermission("getUsers","trainee","read"));           //true
console.log(hasPermission("getUsers","trainee","delete"));         //false
console.log(hasPermission("getUsers","head-trainer","write"));     //true
console.log(hasPermission("getUsers","head-trainer","read"));      //true
console.log(hasPermission("getUsers","head-trainer","delete"));    //true

const users = [
    {
      traineeEmail: 'trainee2@successive.tech@.tech', //FALSE
      reviewerEmail: 'reviewer2@successive.tech',
    },

    {
      traineeEmail: 'trainee3@successsive.tech@.tech', //FALSE
      reviewerEmail: 'reviewer3@successive.tech',
    },

    {
      traineeEmail: 'trainee4@successive.tech',
      reviewerEmail: 'reviewer4@successive.tech',
    },

    {
      traineeEmail: 'trainee5@successive.tech',
      reviewerEmail: 'reviewer5@successive@successive.tech', //FALSE
    }
  ]

console.log('.............................................................................');
validateUsers(users);
