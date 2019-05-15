import { IUserModel } from './IUserModel';
import * as mongoose from 'mongoose';
import { UserSchema } from './UserSchema';

const schema = new UserSchema({
  collection: 'user'
});

export default mongoose.model<IUserModel>('Users', schema);
