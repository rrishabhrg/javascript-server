import UsersModel from '../../repositories/user/UserModel';
import * as mongoose from 'mongoose';

export class versionableRepository {
  private Model;

  constructor(UsersModel) {
    this.Model = UsersModel;
  }

  public static generateObjectId() {
    return mongoose.Types.ObjectId();
  }

  public createUser(data: any){                                              //CREATE
    const id = versionableRepository.generateObjectId();
    const model = UsersModel.create({
      _id: id,
      ...data
    });
  }

  public getUserById(id: any) {                                              //READ
    return UsersModel.findById(id);
  }

  public updateUserById(id: any) {                                            //UPDATE
    return UsersModel.findByIdAndUpdate();
  }

  public deleteUserById(id: any) {                                            //DELETE
    return UsersModel.findByIdAndRemove(id);
  }

}
