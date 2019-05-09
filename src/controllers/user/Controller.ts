import { userRepository } from '../../repositories/user/UserRepository';

class UserController {
  userRepoObj = new userRepository();

  public post = (req: any, res: any) => {
    const { email, name }  = req.body;
    this.userRepoObj.createUser({ email, name });
    res.send('New user created successfully.');
  }

  public get(req, res){
    const { id } = req.params.id;
    this.userRepoObj.readUser({ id });
  }

  public put(req, res){
    const { id } = req.params.id;
    this.userRepoObj.updateUser({ id });
    return('User details updated successfully.');
  }

  public delete(req, res){
    const { id } = req.params.id;
    this.userRepoObj.deleteUser({ id });
    return('Record deleted successfully.');
  }
}

export default new UserController();  //{Creating and exporting object of class.}
