import UserModel from "./UserModel";
// import { Mongoose } from "mongoose";
import * as mongoose from 'mongoose';

class userRepository{

  public static generateObjectId(){
    return mongoose.Types.ObjectId();
  }

  public static count(query: any){
    return UserModel.countDocuments(query);
  }

  // static createUser = function (req, res) {
  public static createUser(req, res){
    const id = userRepository.generateObjectId();
    const model = new UserModel({
      name: req.body.name,
      email: req.body.email
    });
    model.save(function (err){
      if(err){
        return (err);
      }
      res.send('New user created successfully.');
    })
  }

  static readUser = function (req, res) {
    UserModel.findById(req.params.id, function (err, userModel) {
      if (err) return (err);
      res.send(UserModel);
    })
  }

  static updateUser = function (req, res) {
    UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, userModel) {
      if (err) return (err);
      res.send('User details updated successfully.');
    })
  }

  static deleteUser = function (req, res) {
    UserModel.findByIdAndRemove(req.params.id, function (err) {
      if (err) return (err);
      res.send('Record deleted successfully.');
    })
  }
}

export { userRepository };
