import UsersModel from './UserModel';
import * as mongoose from 'mongoose';

class userRepository {

  public static generateObjectId(){
    return mongoose.Types.ObjectId();
  }

  public async signIn(query){
    return await UsersModel.find(query, { password: 0});
  }

  public count(){
    return UsersModel.countDocuments();
  }

  public createUser(data){                               //CREATE
    const id = userRepository.generateObjectId();
    const model = new UsersModel({
      _id: id,
      ...data
    });
    model.save().then(data => {
      return data;
    })
    .catch(error =>{
      return error.message || "Some error occurred while creating the record."
    });
  }

  public getUserById(id: any){                          //READ
    return UsersModel.findById(id);
  }

  public updateUserById(id: any){             //UPDATE
    return UsersModel.findByIdAndUpdate();
  }

  public deleteUserById(id: any){                    //DELETE
    return UsersModel.findByIdAndRemove(id);
  }
}

export default new userRepository();
