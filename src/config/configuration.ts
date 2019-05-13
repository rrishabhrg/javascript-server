import { IConfig } from '../config';
import * as dotenv from 'dotenv';
dotenv.config();

const config: IConfig = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  KEY: process.env.KEY,
  MONGO_URL: process.env.MONGO_URL,
  TOKEN_KEY: process.env.TOKEN_KEY
}

export const obj = Object.freeze(config);
export { config };
