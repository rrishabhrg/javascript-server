import { IConfig } from './IConfig';
import * as dotenv from 'dotenv';
dotenv.config();

const config: IConfig = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  KEY: process.env.KEY,
  MONGO_URL: process.env.MONGO_URL
}

export const obj = Object.freeze(config);
export { config };
