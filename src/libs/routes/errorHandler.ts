const var_err =  {
  error: 'Not Found',
  message: 'error',
  status: 500,
  timestamp: "2019-01-08T17:38:21.929Z"
}

let errorHandler: any = (err: any, req: any, res: any, next: any) => {
  res.send(var_err).json(err.message);
  next();
};

export { errorHandler };
