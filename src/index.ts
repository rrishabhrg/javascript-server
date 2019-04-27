import { Server } from "./Server";
import { config } from "./config/configuration";

const serve = new Server(config);
serve.bootstrap().run();
