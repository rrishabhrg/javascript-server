import UsersModel from './UserModel';
import * as bcrypt from 'bcrypt';
import { versionableRepository } from '../versionable/VersionableRepository';
import { config } from '../../config';

class userRepository extends versionableRepository {

  constructor() {
    super(UsersModel);
  }

  public async count(query: any = {}){
    return await UsersModel.countDocuments(query);
  }

  public async generateHash(password: string) {
    return await bcrypt.hash(password, config.SALT_PASSWORD);
  }

  public async comparePassword(query) {
    try {
      const { email, password } = query;
      const encryptPassword = await this.findPassword({email});
      const found = await bcrypt.compare(password, encryptPassword.password);
      return found;
    } catch (error) {
        throw new Error();
    }
  }

  public async findPassword(query: any = {}) {
    return await UsersModel.findOne(query, { password: 1, _id: 0 });
  }

  public async find(query: any){                        //LOGIN
    const result = await UsersModel.find(query, { password: 0 });
    return result;
  }

  public async multipleSeeding(query){
    const result = await UsersModel.insertMany(query);
    return result;
  }

}

export default new userRepository();
