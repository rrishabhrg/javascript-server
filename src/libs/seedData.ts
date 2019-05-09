import { userRepository } from '../repositories/user/UserRepository';

const userRepoObj = new userRepository();
const seedData = () => {
  userRepoObj.count().then((result) => {
    if (result === 0) {
      userRepoObj.createUser({
        name: 'Rishabh Gupta',
        email: 'rrishabh@gmail.com'
      })
    }
  });
  console.log('Data Seeded Successfully.');
}

export default seedData;



























































// function seedEvents(req, res) {
//   // create some events
//   const events = [
//     { name: 'Rishabh Gupta', email: 'rrishabh@gmail.com' },
//   ];

//   // use the Event model to insert/save
//     events.save();

//   // seeded!
//   res.send('Database seeded!');
// }
