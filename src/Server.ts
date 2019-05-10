import * as express from 'express';
import bodyParser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs';
import { IConfig } from './config'
import { traineeRouter } from './router';

class Server{
  app = express();
  port: string;
  // bodyParser: any;

  constructor (private config: IConfig) {
    this.port = process.env.PORT;
    this.app = express();
  }

  public bootstrap = (): Server => {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public run: any = () => {
    this.app.listen(this.port, () => {
      console.log(`This app is running on the port ${this.port}!`);
    });
  }

  public setupRoutes: any = () => {
    this.app.use('/api', traineeRouter);
    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  }

  public initBodyParser = () => {
    this.app.use(bodyParser.json({ type: 'text/html' }));
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default Server;
