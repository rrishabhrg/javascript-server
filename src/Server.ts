import { notFoundRoute, errorHandler } from './libs';
import { IConfig } from './config'
import * as express from 'express';
import bodyParser = require ('body-parser');

class Server{
  app = express();

  constructor (private config: IConfig) {
    this.config.port = process.env.PORT;
    this.app = express();
  }

  public bootstrap = (): Server => {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public run: any = () => {
    this.app.listen(this.config.port, () => {
      console.log(`App is running on the port ${this.config.port}!`);
    });
  }

  public setupRoutes: any = () => {
    this.app.get('/', ( req: any,res: any ) => {
      res.send('I Am Fine');
    });

    this.app.get('/health-check', ( req: any,res: any ) => {
      res.send('I Am OK');
    });

    this.app.use(notFoundRoute);
    this.app.use(errorHandler);
  }

  public initBodyParser: any = () => {
    const { app } = this;
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
  }
}

export default Server;
