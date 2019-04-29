import { IConfig } from './IConfig';
import * as dotenv from 'dotenv';
dotenv.config();

const config: IConfig = {
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV
}

export const obj = Object.freeze(config);
export { config };
