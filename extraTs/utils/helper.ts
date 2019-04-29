import { IvalidateEmail } from '../interfaces'

//Validating Email of a user
let pattern = new RegExp (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
let validateEmail: IvalidateEmail;
validateEmail = function (trainee: string , reviewer: string) {
    console.log(pattern.test(trainee));
    console.log(pattern.test(reviewer));
}

export { validateEmail };
