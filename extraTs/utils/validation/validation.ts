import { validateEmail } from '../helper';
import { IvalidateUsers } from '../../interfaces'

//Validating users
let validateUsers: IvalidateUsers;
validateUsers = function (users: { traineeEmail: string; reviewerEmail: string; }[]) {
  console.log(users);
  users.forEach((key: { traineeEmail: any; reviewerEmail: any; }) => {
    console.log(key);
    validateEmail(key.traineeEmail, key.reviewerEmail);
  })
}

export { validateUsers };
