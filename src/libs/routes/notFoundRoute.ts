  export default function notFoundRoute( req, res, next) {
  return next({
    error: 'Forbidden',
    message: 'Requested Page Forbidden.',
    status: 403,
  });
}
