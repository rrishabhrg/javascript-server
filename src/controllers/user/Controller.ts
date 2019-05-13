import { userRepository } from '../../repositories/user/UserRepository';
import UsersModel from '../../repositories/user/UserModel';
import { Request, Response } from 'express';

class UserController {

  public post = (req: Request, res: Response) => {           //CREATE
    const { name, email, password, address } = req.body;
    const userRepoObj = new userRepository();
    if(!(name && email && password && address)){
      return res.status(400).send({
        message: 'This field can not be empty.'
      });
    }
    userRepoObj.createUser({ name, email, password, address });
    res.send('New user created successfully.');
  }

  public async get(req: Request, res: Response){              //READ
    const { id } = req.params;
    const userRepoObj = new userRepository();
    try {
      const user = await userRepoObj.getUserById(id);
      if(!user) {
        return res.status(404).send("User not found with this id ");
      }
      return res.status(200).json(user);
    }
    catch(err) {
      return res.status(500).send(err.message);
    }
  }

  public put(req: Request, res: Response){              //UPDATE
    const { id } = req.params;
    const userRepoObj = new userRepository();
    userRepoObj.updateUserById(id);
    if(!id) {
      return res.status(400).send({
        message: "User id can not be empty."
      });
    }
    UsersModel.findByIdAndUpdate(id, {
      name: req.body,
      email: req.body,
      password: req.body,
      address: req.body
    }, {new: true}).then(user => {
      if(!user) {
        return res.status(404).send({
          message: "User not found with id " +id
        });
      }
      res.send(user);
    })
    .catch(err => {
      if(err.kind === 'ObjectId') {
        return res.status(404).send({
          message: "User not found with this id " +id
        });
      }else{
      return res.status(500).send({
        message: "Error occur while updating user with this id " +id
      });}
    })
    return('User details updated successfully.');
  }

  public async delete(req: Request, res: Response){            //DELETE
    const { id } = req.params;
    const userRepoObj = new userRepository();
    try {
      const user = await userRepoObj.deleteUserById(id);
      if(!user) {
        return res.status(404).send("User not found with this id ");
      }
      res.send({message: "User deleted successfully."});
    }
    catch(err) {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
            message: "User not found with id " +id
        });
      }
      return res.status(500).send({
        message: "Unable to delete user with this id " +id
      });
    }
  }

}

export default new UserController();  //{Creating and exporting object of class.}
