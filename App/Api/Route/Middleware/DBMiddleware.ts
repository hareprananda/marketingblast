import { NextApiRequest, NextApiResponse } from "next";
import { APICatch } from "../../Types/Api";
import MongoDBConnect from "../../Database/MongoDBConnect";

const DBMiddleware = (handler: APICatch) => {
  return async (req: NextApiRequest, res: NextApiResponse) =>
    MongoDBConnect(() => handler(req, res));
};

export default DBMiddleware;
