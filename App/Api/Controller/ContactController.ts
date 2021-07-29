import { NextApiRequest, NextApiResponse } from "next";
import { ObjectValidate, Validate } from "../../Utils/Validation";
import ContactModel, { IContact } from "../Database/Models/Contact.model";
import UserModel from "../Database/Models/User.model";

function ContactController(req: NextApiRequest, res: NextApiResponse) {
  async function getContact() {
    const contactData = await ContactModel.find({});
    res.json(contactData);
  }

  async function addContact() {
    // const newContact = await ContactModel.create(contact);
    // return newContact;
    const body = req.body;
    const value = {
      name: body.name,
      photo: body.photo,
      number: body.number,
      email: body.email,
    };
    const validate = ObjectValidate(value, {
      photo: Validate(value.photo),
      name: Validate(value.name).required().lengthGreaterThan(4),
      email: Validate(value.email).isEmail(),
      number: Validate(value.number).isNumber().required(),
    });

    if (!validate.validate()) return res.status(422).json(validate.message());

    //res.json(!validate.validate());

    const newContact = await ContactModel.create(req.body);
    res.json(newContact);
  }

  async function singleContact() {
    const { idcontact } = req.query;

    try {
      const findContact = await ContactModel.findOne({ _id: idcontact });
      res.json(findContact);
    } catch (err) {
      res.status(404).send("Not found");
    }
  }
  async function updateContact() {
    const updated = req.body;
    const { idcontact } = req.query;
    try {
      const updatedData = await ContactModel.updateOne(
        { _id: idcontact as string },
        updated
      );
      if (updatedData.n === 0) throw new Error();
      res.json(updatedData);
    } catch (err) {
      const pesan = err.message as string | "Not found";
      res.status(404).send(pesan);
    }
  }
  async function deleteContact() {
    const { idcontact } = req.query;
    try {
      const deleted = await ContactModel.deleteOne({
        _id: idcontact as string,
      });
      if (deleted.n === 0) throw new Error("sing ade unduk");
      res.json(deleted);
    } catch (err) {
      res.status(404).json(err.message);
    }
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
