import * as express from 'express';
import { notFoundRoute, errorHandler } from './libs';
import { traineeRouter } from './router';
import Database from './libs/Database';
import * as bodyParser from 'body-parser';

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
    this.app.use('/api', traineeRouter);
    this.app.get('/', ( req: any,res: any ) => {
      res.send('I Am Fine');
    });

    this.app.get('/api', ( req: any,res: any ) => {
      res.send("Trainee or User");
    });

    this.app.use('/api', traineeRouter);
    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  }

  public initBodyParser = () => {
    this.app.use(bodyParser.json({ type: 'text/html' }));
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default Server ;
