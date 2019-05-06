import { notFoundRoute, errorHandler } from './libs';
import { IConfig } from './config'
import * as express from 'express';
import { router } from './router';
import bodyParser = require ('body-parser');

class Server{
  app = express();
  port: string;

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
    this.app.get('/', ( req: any,res: any ) => {
      res.send('I Am Fine');
    });

    this.app.get('/api', ( req: any,res: any ) => {
      res.send("Trainee or User");
    });

    this.app.use('/api', router);
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
