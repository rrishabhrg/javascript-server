import UsersModel from "./UserModel";
import * as mongoose from 'mongoose';

class userRepository{

  public static generateObjectId(){
    return mongoose.Types.ObjectId();
  }

  public count(){
    return UsersModel.countDocuments();
  }

  public createUser(data){
    const id = userRepository.generateObjectId();
    const model = new UsersModel({
      _id: id,
      ...data
    });
    return model.save();
  }

  public readUser(id){
    UsersModel.findById(id, function (err, userModel) {
      if (err) return (err);
      return (UsersModel);
    })
  }

  public updateUser(id){
    UsersModel.findByIdAndUpdate(id, function (err) {
      if (err) return (err);
      // return('User details updated successfully.');
    })
  }

  public deleteUser(id){
    UsersModel.findByIdAndRemove(id, function (err) {
      if (err) return (err);
      // return('Record deleted successfully.');
    })
  }
}

export { userRepository };
