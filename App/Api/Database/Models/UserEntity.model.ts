import mongoose from "mongoose";

export interface IUserEntity {
  userId: string;
  entityId: string;
}

const UserEntitySchema = new mongoose.Schema<IUserEntity>({
  userId: { type: mongoose.Types.ObjectId, required: true },
  entityId: { type: mongoose.Types.ObjectId, required: true },
});

const UserEntityModel =
  mongoose.models.userentity ||
  mongoose.model<IUserEntity>("userentity", UserEntitySchema);

export default UserEntityModel;
