import { Server } from "./Server";
import { config } from "./config/configuration";
import { IConfig } from '../src/config/IConfig'
import { default as notFound } from './libs/routes/notFoundRoute';
import { errorHandler } from './libs/routes/errorHandler';

const serve = new Server(config);
serve.bootstrap().run();

export { IConfig, notFound, errorHandler };
