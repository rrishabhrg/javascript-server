import { IConfig } from './config/IConfig';
import * as express from 'express';
import bodyParser = require('body-parser');
import { notFound } from './libs/routes/notFoundRoute';
import { errorHandler } from './libs/routes/errorHandler';
import { router } from './router';

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
      console.log(`This app is running on the port ${this.port}!`);
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
      throw new Error("My Custom Error !!!! ");
    });

    this.app.get('/api', ( req: any,res: any ) => {
      res.send("Trainee or USer");
    });


    this.app.use('/api', router);
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
