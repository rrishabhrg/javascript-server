//import { function_validateUsers } from './../extraTs/interfaces';
import { IConfig } from './config/IConfig';
import * as express from 'express';
import bodyParser = require('body-parser');
import { displayErrors } from '../libs/routes/notFoundRoute';
import { errorHandler } from '../libs/routes/errorHandler';

class Server{
  app = express();
  private port: string;

  constructor (config: IConfig) {
    this.port = process.env.PORT;
  }

  public bootstrap: any = () => {
    this.setupRoutes();
    this.initBodyParser();
    return this;
  }

  public run: any = () => {
    this.app.listen(this.port, () => {
      console.log(`App is running on the port ${this.port}!`);
    });
  }

  public setupRoutes: any = () => {
    // this.app.get('/health-check', ( req: any,res: any ) => {
    //   res.send('I Am OK');
    // });

    // this.app.get('/', ( req: any,res: any ) => {
    //   res.send('I Am Fine');
    // });

    this.app.use(displayErrors());
    this.app.use(errorHandler());
  }

  public initBodyParser: any = () => {
    const { app } = this;
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
  }

}

export { Server };
