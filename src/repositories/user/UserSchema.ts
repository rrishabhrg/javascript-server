import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, required: true, max: 40 },
  email: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default schema;
