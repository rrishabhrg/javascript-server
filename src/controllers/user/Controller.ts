import { userRepository } from '../user/../../repositories/user/UserRepository';
import { RequestHandler } from 'express';

class Control {
  [x: string]: RequestHandler;

  // const userRepositoryObj = new userRepository();
  public post(req, res){
    userRepository.createUser(req,res);
  }

  public get(req, res){
    userRepository.readUser(req,res);
  }

  public put(req, res){
    userRepository.updateUser(req,res);
  }

  public delete(req, res){
    userRepository.deleteUser(req,res);
  }

}

export default new Control();  //{Creating and exporting object of class.}
