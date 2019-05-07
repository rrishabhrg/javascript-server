import { default as Server } from './Server';
import { config } from './config';
import Database from './libs/Database';

const server = new Server(config);
server.bootstrap().run();
