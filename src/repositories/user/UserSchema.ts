import { VersionableSchema } from "../versionable/VersionableSchema";

export class UserSchema extends VersionableSchema {

  constructor(options: any){
    const userSchema = {
      name: String,
      email: String,
      password: String,
      address: String,
      role: String
    }
    super(userSchema, options);
  }

}
