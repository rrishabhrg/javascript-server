let notFound: any = (req: any, res: any, next: any) => {
  const err = 'Not Found';
  res.status(404).send(err);
  next();
}

export { notFound };
