import { NextApiRequest, NextApiResponse } from "next";
import ContactController from "../../../App/Api/Controller/ContactController";
import { IContact } from "../../../App/Api/Database/Models/Contact.model";
import DBMiddleware from "../../../App/Api/Route/Middleware/DBMiddleware";
import { APICatch } from "../../../App/Api/Types/Api";

const handler: APICatch = function handler(req, res) {
  const contact = ContactController(req, res);
  switch (req.method) {
    case "GET":
      return contact.getContact();
    case "POST":
      return contact.addContact({} as IContact);
    case "DELETE":
      return contact.deleteContact({});
    case "PUT":
      return contact.updateContact({}, {});
  }
};

export default DBMiddleware(handler);
