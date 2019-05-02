import { NextFunction, Request, Response } from 'express';

export default function notFoundRoute( req: Request, res: Response, next: NextFunction) {
  return next({
    error: 'Forbidden',
    message: 'Access is forbidden to the requested page.',
    status: '403',
  });
}
