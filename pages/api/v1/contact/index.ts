import { NextApiRequest, NextApiResponse } from "next";
import ContactController from "../../../../App/Api/Controller/ContactController";
import { IContact } from "../../../../App/Api/Database/Models/Contact.model";
import DBMiddleware from "../../../../App/Api/Route/Middleware/DBMiddleware";
import { APICatch } from "../../../../App/Api/Types/Api";

const handler: APICatch = function handler(req, res) {
  const contact = ContactController(req, res);
  switch (req.method) {
    case "GET":
      return contact.getContact();
    case "POST":
      if (req.headers["content-type"] !== "application/x-www-form-urlencoded")
        return res.status(403).send("Forbidden");
      return contact.addContact();
    default:
      return res.status(404).send("Not found");
  }
};

export default DBMiddleware(handler);
