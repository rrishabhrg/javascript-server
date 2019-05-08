import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  _id: mongoose.Types,
  name: String,
  email: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default schema;
