import UsersModel from './UserModel';
import * as bcrypt from 'bcrypt';
import { versionableRepository } from '../versionable/VersionableRepository';
import { config } from '../../config';
import { query } from 'express-validator/check';

class userRepository extends versionableRepository {

  constructor() {
    super(UsersModel);
  }

  public async count(query: any = {}){
    return await UsersModel.countDocuments(query);
  }

  public async encryptPassword(value: String) {
    return await bcrypt.hash(value, config.saltPass);
  }

  public async comparePassword(query: any = {}) {
    const { email, password } = query;
    const saveData = await this.findPassword({ email });
    const found = await bcrypt.compare(password, saveData.password);
    if(found) {
      return found;
    }
    throw new Error();
  }

  public async findPassword(query: any = {}) {
    return await UsersModel.findOne(query, { password: 1, _id: 0 });
  }

  public async signIn(query: any){
    const result = await UsersModel.find(query, { password: 0 });
    return result;
  }

}

export default new userRepository();
