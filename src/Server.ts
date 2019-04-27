import { IConfig } from './config/IConfig';
import * as express from 'express';

class Server{
  app = express();
  private port: string;

  constructor (config: IConfig) {
    this.port = process.env.PORT;
  }

  public bootstrap: any = () => {
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
  }
}

export { Server };
