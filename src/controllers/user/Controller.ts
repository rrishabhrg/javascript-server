import UsersModel from '../../repositories/user/UserModel';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import { config } from "../../config/configuration";

class UserController {

  public post = (req: Request, res: Response) => {           //CREATE
    const { name, email, password, address } = req.body;
    if(!(name && email && password && address)) {
      return res.status(400).send({
        message: 'This field can not be empty.'
      });
    }
    UserRepository.createUser({ name, email, password, address });
    res.send('New user created successfully.');
  }

  public async get(req: Request, res: Response) {             //READ
    const { id } = req.params;
    try {
      const user = await UserRepository.getUserById(id);
      if(!user) {
        return res.status(404).send("User not found with this id ");
      }
      return res.status(200).json(user);
    }
    catch(err) {
      return res.status(500).send(err.message);
    }
  }

  public put(req: Request, res: Response) {             //UPDATE
    const { id } = req.params;
    UserRepository.updateUserById(id);
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
      }
      else {
        return res.status(500).send({
          message: "Error occur while updating user with this id " +id
        });
      }
    })
    return('User details updated successfully.');
  }

  public async delete(req: Request, res: Response) {            //DELETE
    const { id } = req.params;
    UserRepository;
    try {
      const user = await UserRepository.deleteUserById(id);
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

  public login = async (req: Request, res: Response, next) => {
    try {
    const { email, password } = req.body;
    const found = await UserRepository.count({ email });
    if(found) {
      const compare = await UserRepository.comparePassword({ email, password });
      if (compare) {
        const data = await UserRepository.find({ email });
        const token = await jwt.sign({ data }, config.TOKEN_KEY, {
          expiresIn: 900
        });
        res.send(token);
      } else {
        res.send("NOT FOUND");
      }
    } else {
      res.send("NOT FOUND");
    }
  } catch (error) {
    throw new Error();
  }
  }

  public profile = async (req, res, next) => {
    try {
      const token = req.header("Authorization");
      if(!token) {
        next({error : {
          error: 'Forbidden',
          message: 'Token is empty',
          status: 403
        }});
      }

      await jwt.verify(token, config.TOKEN_KEY, async (err)=> {
        if(!err){
          const decoded = await jwt.decode(token);
          res.json(decoded);
        } else {
          next({error : {
            error: 'Forbidden',
            message: 'Token is invalid',
            status: 403
          }});
        }
      })
    } catch (error) {
      throw new Error();
    };
  }
}

export default new UserController();  //{Creating and exporting object of class.}
