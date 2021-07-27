import { NextApiRequest, NextApiResponse } from "next";

export type APICatch = (req: NextApiRequest, res: NextApiResponse) => void;
