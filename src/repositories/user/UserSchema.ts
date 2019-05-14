import { VersionableSchema } from "../versionable/VersionableSchema";

export class UserSchema extends VersionableSchema {
  constructor(options: any){
    const userSchema = {
      name: { type: String },
      email: { type: String, unique: true, required: true },
      password: { type: String },
      address: { type: String }
    }
    super(userSchema, options);
  }
}
