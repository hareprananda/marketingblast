import mongoose from "mongoose";
import UserEntityModel from "./UserEntity.model";

export interface IEntity {
  _id: string;
  entityName: string;
}

const entitySchema = new mongoose.Schema<IEntity>({
  entityName: { type: String, required: true },
});

entitySchema.pre("deleteOne", async function (next) {
  try {
    let deletedData = await UserEntityModel.deleteMany(this._conditions);
    console.log(deletedData);
    return next(); // normal save
  } catch (error) {
    return next(error);
  }
});

const EntityModel =
  mongoose.models.entity || mongoose.model<IEntity>("entity", entitySchema);

export default EntityModel;
