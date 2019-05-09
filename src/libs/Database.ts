import * as mongoose from 'mongoose';
import seedData from './seedData';

export default class Database {
  public static open( MONGO_URL ) {
    return new Promise((resolve, reject) => {
      const options = {
        useNewUrlParser: true
      };
      mongoose.connect(MONGO_URL, options);
      mongoose.connection.on('error', () => {
        reject();
      });
      mongoose.connection.on('connected', () => {
        console.log('Connection is successfully established.');
        seedData();
        resolve();
      });
    });
  }
  public static disconnect() {
    mongoose.disconnect();
  }
}
