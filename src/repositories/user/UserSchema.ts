import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, max: 40 },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, min: 9},
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default userSchema;
