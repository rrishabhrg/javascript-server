import { NextFunction, Request, Response } from 'express';

let errorHandler: any = (err: any, req: Request, res: Response, next: NextFunction) => {
  let errorObj =  {
    error: err.error ? err.error : 'Not Found',
    message: 'Page Not Found.',
    status: err.status ? err.status : 404,
    timestamp: new Date()
  }
  res.status(errorObj.status).json(errorObj);
};

export { errorHandler };
