import UsersModel from './UserModel';
import { versionableRepository } from '../versionable/VersionableRepository';

class userRepository extends versionableRepository {

  constructor() {
    super(UsersModel);
  }

  public async count(query: any = {}){
    return await UsersModel.countDocuments(query);
  }

  // public static generateObjectId(){
  //   return mongoose.Types.ObjectId();
  // }

  // public createUser(data: any){                         //CREATE
  //   const id = userRepository.generateObjectId();
  //   const model = new UsersModel({
  //     _id: id,
  //     ...data
  //   });
  //   model.save().then(data => {
  //     return data;
  //   })
  //   .catch(error =>{
  //     return error.message || "Some error occurred while creating the record."
  //   });
  // }

  // public getUserById(id: any){                          //READ
  //   return UsersModel.findById(id);
  // }

  // public updateUserById(id: any){                       //UPDATE
  //   return UsersModel.findByIdAndUpdate();
  // }

  // public deleteUserById(id: any){                       //DELETE
  //   return UsersModel.findByIdAndRemove(id);
  // }

  public async signIn(query: any){
    const result = await UsersModel.find(query, { password: 0 });
    return result;
  }

}

export default new userRepository();
