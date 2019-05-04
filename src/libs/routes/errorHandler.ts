export const errorHandler = (err, req, res, next) => {
  let errorObj =  {
    error: err.error,
    message: err.message,
    status: err.status,
    timestamp: new Date()
  }
  res.json(errorObj);
};
