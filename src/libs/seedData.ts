import UserRepository from '../repositories/user/UserRepository';

const seedData = async () => {
  const data = [
    {
      name: 'Pranjul Gupta',
      email: 'pranjul26897@gmail.com',
      password: await UserRepository.generateHash('2689726897'),
      address: 'Kanpur',
      role: 'trainee'
    },

    {
      name: 'Rishabh Gupta',
      email: 'rrishabh@gmail.com',
      password: await UserRepository.generateHash('rishabh9695'),
      address: 'Kanpur',
      role: 'head-trainer'
    },

    {
      name: 'Pooja Tiwari',
      email: 'pooja3488.pt@gmail.com',
      password: await UserRepository.generateHash('3488@imed'),
      address: 'Kanpur',
      role: 'trainer'
    },

    {
      name: 'Anand Tripathi',
      email: 'anand106@gmail.com',
      password: await UserRepository.generateHash('anandg860'),
      address: 'Kanpur',
      role: 'trainer'
    },

    {
      name: 'Divyansh Mishra',
      email: 'divyansh@gmail.com',
      password: await UserRepository.generateHash('divyansh@successive'),
      address: 'Jabalpur',
      role: 'trainee'
    }

  ];

  UserRepository.count()
  .then((result) => {
    if (result === 0) {
      UserRepository.multipleSeeding(data)
      .then((result) => {
        console.log('Data Seeded Successfully.');
      })
    } else {
      console.log('Data Already Seeded.');
    }
  })
  .catch((error) => {
    throw new Error();
  })
}

export default seedData;
