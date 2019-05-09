import { IUserModel } from './IUserModel';
import * as mongoose from 'mongoose';
import schema from './UserSchema';

export default mongoose.model('Users', schema);
