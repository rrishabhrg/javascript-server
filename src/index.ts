import { default as Server } from './Server';
import { config } from './config';
import { errorHandler, notFoundRoute } from './libs';

const server = new Server(config);
server.bootstrap().run();

export { notFoundRoute, errorHandler };
