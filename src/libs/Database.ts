import * as mongoose from 'mongoose';
import seedData from './seedData';

export default class Database {
  public static open( MONGO_URL ) {
    return new Promise((resolve, reject) => {
      mongoose.set('useCreateIndex', true);
      const options = {
        useNewUrlParser: true
      };
      mongoose.connect(MONGO_URL, options).then(() => {
        console.log("Successfully connected to the database");
        resolve();
      }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        reject();
        process.exit();
      });
      seedData();
    });
  }
  public static disconnect() {
    mongoose.disconnect();
  }
}
