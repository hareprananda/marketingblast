import ContactController from "../../../../App/Api/Controller/ContactController";
import ContactModel from "../../../../App/Api/Database/Models/Contact.model";
import DBMiddleware from "../../../../App/Api/Route/Middleware/DBMiddleware";
import { APICatch } from "../../../../App/Api/Types/Api";

const handler: APICatch = async (req, res) => {
  const Controller = ContactController(req, res);

  switch (req.method) {
    case "GET":
      return Controller.singleContact();
    case "PUT":
      if (req.headers["content-type"] !== "application/x-www-form-urlencoded")
        return res.status(403).send("Forbidden");
      return Controller.updateContact();
    case "DELETE":
      return Controller.deleteContact();
    default:
      return res.status(404).send("Not found");
  }
};

export default DBMiddleware(handler);
