import { userRepository } from '../repositories/user/UserRepository';

const userRepoObj = new userRepository();
const seedData = () => {
  userRepoObj.count().then((result) => {
    if (result === 0) {
      userRepoObj.createUser({
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
