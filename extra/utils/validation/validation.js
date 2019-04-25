import {validateEmail} from '../helper'

//Validating users 
export function validateUsers (users) {
  console.log(users);
  users.forEach((key) => {
    console.log(key);
    validateEmail(key.traineeEmail, key.reviewerEmail);
  })
}