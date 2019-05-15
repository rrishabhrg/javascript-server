import { IConfig } from '../config';
import * as dotenv from 'dotenv';
dotenv.config();

export const config: IConfig = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_URL: process.env.MONGO_URL,
  TOKEN_KEY: process.env.TOKEN_KEY,
  SALT_PASSWORD: parseInt(process.env.SALT_PASSWORD)
}

export const obj = Object.freeze(config);
