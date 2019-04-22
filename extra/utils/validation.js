let users = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@suessive.tech',
    },
    {
        traineeEmail: 'trainee@ssucessiv.tech',
        reviewerEmail: 'reviewe@success.tech',
    },
    {
        traineeEmail: 'trainee.ts@successive.tech',
        reviewerEmail: 'reviewer@successive.tech',
    },
    {
        traineeEmail: 'trainee1.32@success.tech',
        reviewerEmail: 'reviewer1.28@success.tech',
    },
];

let validUsers = [];
let invalidUsers = [];

let validateUsers = ({traineeEmail, reviewerEmail}) => {
    if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
        validUsers.push({
            'traineeEmail': traineeEmail,
            'reviewerEmail': reviewerEmail,
        });
    }
    else{
        invalidUsers.push({
            'traineeEmail': traineeEmail,
            'reviewerEmail': reviewerEmail,
        });
    }
}

let validateEmail = (email) => {
    let reg = /^([a-zA-Z0-9_\.\-])+\@successive.tech/;
    return reg.test(email);
}

for (let user of users) {
    validateUsers({ traineeEmail, reviewerEmail} = user);
}

console.log("Valid Users : ", validUsers.length,validUsers);
console.log("Invalid Users : ", invalidUsers.length,invalidUsers);