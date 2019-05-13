import * as mongoose from 'mongoose';

export interface IUserModel extends mongoose.Document {
  id,
  name,
  email,
  password,
  address
}
