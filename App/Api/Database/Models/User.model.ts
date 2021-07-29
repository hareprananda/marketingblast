import mongoose from "mongoose";

export interface IUser {
  email: string;
  updatedAt: Date;
  createdAt: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    email: String,
  },
  {
    timestamps: true,
  }
);

const UserModel =
  mongoose.models.user || mongoose.model<IUser>("user", userSchema);

export default UserModel;
