import EntityModel from "../../../../App/Api/Database/Models/Entity.model";
import DBMiddleware from "../../../../App/Api/Route/Middleware/DBMiddleware";
import { APICatch } from "../../../../App/Api/Types/Api";

const handler: APICatch = (req, res) => {
  async function getEntity() {
    const data = await EntityModel.find({});

    res.json(data);
  }

  async function addEntity() {
    const entityName = req.body.entityName;

    const data = await EntityModel.create({ entityName: entityName });

    res.json(data);
  }
};

export default DBMiddleware(handler);
