import { default as Server } from './Server';
import { config,IConfig } from './config';
import { errorHandler, notFoundRoute } from './libs';

const serve = new Server(config);
serve.bootstrap().run();

export { IConfig, notFoundRoute, errorHandler };
