class Control{
  public get(req: any, res: any){
    res.send('Got a GET request.');
  }

  public post(req: any, res: any){
    res.send('Got a POST request.');
  }

  public put(req: any, res: any){
    res.send('Got a PUT request.');
  }

  public delete(req: any, res: any){
    res.send('Got a DELETE request.');
  }
}

export default new Control();  //{Creating and exporting object of class.}
