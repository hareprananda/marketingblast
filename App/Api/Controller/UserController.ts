import { NextApiRequest, NextApiResponse } from "next";

function UserController(req: NextApiRequest, res: NextApiResponse) {
  function register() {
    res.json("this is register");
  }
  function login() {
    res.json("this is login");
  }
}

export default UserController;
