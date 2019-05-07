import * as mongoose from 'mongoose';

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
        resolve();
      });
    });
  }
  public static disconnect() {
    mongoose.disconnect();
  }
}
