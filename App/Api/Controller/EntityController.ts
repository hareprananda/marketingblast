import { NextApiResponse, NextApiRequest } from "next";
import EntityModel from "../Database/Models/Entity.model";
import UserEntityModel from "../Database/Models/UserEntity.model";

function EntityController(req: NextApiRequest, res: NextApiResponse) {
  async function addEntity() {
    const entityName = req.body.entityName;

    const data = await EntityModel.create({ entityName: entityName });

    res.json(data);
  }

  async function deleteEntity() {
    const { idEntity } = req.query;

    const deleteEntity = await EntityModel.deleteOne({ _id: idEntity });

    res.json(deleteEntity);
  }
  async function updateEntity() {
    const { idEntity } = req.query;
    const updated = req.body;

    const update = await EntityModel.updateOne({ _id: idEntity }, updated);
    res.json(update);
  }

  return {
    addEntity,
    deleteEntity,
    updateEntity,
  };
}

export default EntityController;
