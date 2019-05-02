import { NextFunction, Request, Response } from 'express';

let errorHandler: any = (err: any, req: Request, res: Response, next: NextFunction) => {
  //console.log('error handler');
  let errorObj =  {
    error: err.error ? err.error : 'Not Found',
    message: 'The server can not find the requested page.',
    status: err.status ? err.status : '404',
    timestamp: new Date()
  }
  res.status(errorObj.status).json(errorObj);
};

export { errorHandler };
