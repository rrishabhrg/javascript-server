import { default as Server } from './Server';
import { config } from './config';

const serve = new Server(config);
serve.bootstrap().run();
