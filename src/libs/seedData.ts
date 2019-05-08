import { userRepository } from '../repositories/user/UserRepository';

const userRepoObj = new userRepository();
export default () => {
  userRepository.createUser({
    name: 'Rishabh Gupta',
    email: 'rrishabh@gmail.com'
  })
}







































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
