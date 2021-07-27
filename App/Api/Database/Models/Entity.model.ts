import mongoose from "mongoose";

export interface IEntity {
  _id: string;
  entityName: string;
}

const entitySchema = new mongoose.Schema<IEntity>({
  entityName: { type: String, required: true },
});

const EntityModel = mongoose.model<IEntity>("entity", entitySchema);
export default EntityModel;
