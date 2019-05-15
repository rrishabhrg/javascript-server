import * as mongoose from "mongoose";

export class VersionableSchema extends mongoose.Schema {

  constructor(basicSchema, Options: any) {
    const versionSchema = {
      ...basicSchema,
      createdAt: { type: Date, required: true, default: Date.now },
      modifiedAt: { type: Date, required: true, default: Date.now }
    };
    super(versionSchema, Options);
  }

}
