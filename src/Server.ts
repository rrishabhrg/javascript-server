import * as express from 'express';
import { notFoundRoute, errorHandler } from './libs';
import { traineeRouter } from './router';

class Server{
  app = express();
  private port;
  private bodyParser = require('body-parser');

  constructor (config) {
    this.port = process.env.PORT;
  }

  public bootstrap: any = () => {
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
    this.app.use(this.bodyParser.json({ type: 'text/html' }));
    this.app.use(this.bodyParser.urlencoded({ extended: false }));
  }
}

export default Server ;
