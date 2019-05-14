import * as mongoose from 'mongoose';

export interface IVersionableModel extends mongoose.Document {
  createdAt: any,
  modifiedAt: any
}
