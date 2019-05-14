import { IVersionableModel } from '../versionable/IVersionableModel';
import { ObjectId } from 'bson';

export interface IUserModel extends IVersionableModel {
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  address: String
}
