import { IConfig, notFoundRoute, errorHandler } from './index';
import * as express from 'express';
import bodyParser = require ('body-parser');

class Server{
  public app: express.Express;
  private port: string;

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
      console.log(`App is running on the port ${this.port}!`);
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
