import { IConfig } from './config/IConfig';
import * as express from 'express';
import bodyParser = require('body-parser');
import { notFound } from './libs/routes/notFoundRoute';
import { errorHandler } from './libs/routes/errorHandler';

class Server{
  app = express();
  private port: string;

  constructor (config: IConfig) {
    this.port = process.env.PORT;
  }

  public bootstrap: any = () => {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public run: any = () => {
    this.app.listen(this.port, () => {
      console.log(`App is running on the port ${this.port}!`);
    });
  }

  public setupRoutes: any = () => {
    this.app.get('/health-check', ( req: any,res: any ) => {
      res.send('I Am OK');
    });

    this.app.get('/', ( req: any,res: any ) => {
      res.send('I Am Fine');
    });

    this.app.get('/errorTest', ( req: any,res: any ) => {
      throw new Error("My custom error");
    });

    this.app.use(notFound);
    this.app.use(errorHandler);

  }

  public initBodyParser: any = () => {
    const { app } = this;
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
  }

}

export { Server };
