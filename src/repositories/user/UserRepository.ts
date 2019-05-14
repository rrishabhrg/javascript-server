import UsersModel from './UserModel';
import { versionableRepository } from '../versionable/VersionableRepository';

class userRepository extends versionableRepository {

  constructor() {
    super(UsersModel);
  }

  public async count(query: any = {}){
    return await UsersModel.countDocuments(query);
  }

  public async signIn(query: any){
    const result = await UsersModel.find(query, { password: 0 });
    return result;
  }

}

export default new userRepository();
