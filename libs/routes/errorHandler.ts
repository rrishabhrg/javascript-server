// this.app.get('/', (req: any, res: { status: (arg0: number) => { json: (arg0: { error: string; message: string; status: string; timestamp: string; }) => void; }; }, next: any) => {
//   res.status(404).json({
//     error: 'not found',
//     message: 'error',
//     status: '404',
//     timestamp: 'Date.now()'
//   })
// });

let errorHandler: any = (err: any, req: any, res: any, next: any): void => {
  res.status(404).send({
    error: 'Something failed!',
    message: 'error',
    status: 'res.status()',
    timestamp: 'Date.now()'
  });
}

export { errorHandler };
