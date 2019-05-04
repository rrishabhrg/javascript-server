import { default as Server } from './Server';
import { default as validation } from '../extraTs/utils/validation/validation';
import { config } from './config';
import { errorHandler, notFoundRoute } from './libs';

const server = new Server(config);
server.bootstrap().run();

export { notFoundRoute, errorHandler, validation };
