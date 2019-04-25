import {validateEmail} from '../helper';
import {function_validateUsers} from '../../interfaces'

//Validating users
let validateUsers: function_validateUsers;
validateUsers = function (users: { traineeEmail: string; reviewerEmail: string; }[]) {
  console.log(users);
  users.forEach((key: { traineeEmail: any; reviewerEmail: any; }) => {
    console.log(key);
    validateEmail(key.traineeEmail, key.reviewerEmail);
  })
}

export {validateUsers};