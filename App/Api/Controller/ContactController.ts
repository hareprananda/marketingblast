import { NextApiRequest, NextApiResponse } from "next";
import ContactModel, { IContact } from "../Database/Models/Contact.model";
import UserModel from "../Database/Models/User.model";

function ContactController(req: NextApiRequest, res: NextApiResponse) {
  async function getContact() {
    const contactData = await ContactModel.find({});
    return contactData;
  }

  async function addContact(contact: IContact) {
    const newContact = await ContactModel.create(contact);
    return newContact;
  }

  async function singleContact(identifier: Partial<IContact>) {
    const findContact = await ContactModel.findOne(identifier);
    return findContact;
  }
  async function updateContact(
    identifier: Partial<IContact>,
    update: Partial<IContact>
  ) {
    const updatedData = await ContactModel.updateOne(identifier, update);
    return updatedData;
  }
  async function deleteContact(identifier: Partial<IContact>) {
    const deleted = await ContactModel.deleteOne(identifier);
    return deleted;
  }

  return {
    getContact,
    addContact,
    singleContact,
    updateContact,
    deleteContact,
  };
}

export default ContactController;
