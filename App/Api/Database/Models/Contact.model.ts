import mongoose from "mongoose";

export interface IContact {
  _id: string;
  name: string;
  photo: string;
  number: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new mongoose.Schema<IContact>(
  {
    name: { type: String, required: true },
    photo: { type: String },
    number: { type: String },
    email: { type: String },
  },
  {
    timestamps: true,
  }
);

const ContactModel =
  mongoose.models.contact || mongoose.model<IContact>("contact", contactSchema);

export default ContactModel;
