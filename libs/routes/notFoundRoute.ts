// this.app.use(function({ err, req, res, next }: { err: any; req: any; res: any; next: any; }): void{
//   console.error(err.stack);
//   res.status(404).send('Not Found !!!!');
// });


let displayErrors: any = (err: any, req: any, res: any, next: any): void => {
  console.error(err.stack);
  res.status(404).send('Not Found !!!!');
}

export { displayErrors };
