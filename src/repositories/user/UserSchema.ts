import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  address: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default userSchema;
