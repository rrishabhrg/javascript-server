import UserRepository from '../repositories/user/UserRepository';

const seedData = () => {
  const result = UserRepository.count()
  .then((result) => {
    if (result === 0) {
      UserRepository.createUser({
        name: 'Rishabh Gupta',
        email: 'rrishabh@gmail.com',
        password: '1234567',
        address: 'Kanpur'
      })
      console.log('Data Seeded Successfully.');
    }
  });
}

export default seedData;
