import * as express from 'express';
import { notFoundRoute, errorHandler } from './libs';
import { router } from './router';
import Database from './libs/Database';
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser');

class Server {
  app = express();
  private port;
  private mongoUrl;

  constructor (config) {
    this.port = process.env.PORT;
    this.mongoUrl = process.env.MONGO_URL;
  }

  public bootstrap = (): Server => {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public run: any = () => {
    Database.open(this.mongoUrl);
    this.app.listen(this.port, () => {
      console.log(`This app is running on the port ${this.port}!`);
    });
  }

  public setupRoutes: any = () => {

    this.app.use('/api', router);   //Router
    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  }

  public initBodyParser = () => {
    this.app.use(bodyParser.json({ type: 'text/html' }));
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default Server ;
