import { default as Server } from './Server';
import { config } from './config';
import { router } from './router';

const server = new Server(config);
server.bootstrap().run();

export { router };
