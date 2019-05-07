class Controller {
  public get(req, res){
    res.send('Got a GET request.');
  }

  public post(req, res){
    res.json(req.body);
  }

  public put(req, res){
    res.send('Got a PUT request.');
  }

  public delete(req, res){
    res.send('Got a DELETE request.');
  }

  public schemaCheck(req, res){
    res.json(req.body);
  }
}

export default new Controller();  //{Creating and exporting object of class.}
