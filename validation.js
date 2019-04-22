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
  
  let pattern = new RegExp (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
  //Validating Email of a user
  let validateEmail = (trainee , reviewer) => {
    console.log(pattern.test(trainee));
    console.log(pattern.test(reviewer));
  }
  
  //Validating users 
  let validateUsers = (users) => {
    console.log(users);
    users.forEach((key) => {
      console.log(key);
      validateEmail(key.traineeEmail, key.reviewerEmail);
    })
  }
  
  validateUsers(users);