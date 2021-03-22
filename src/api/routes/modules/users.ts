import { Router } from "express";
const users = Router();

import { getAllUsers } from "../../controllers/users";

users.route("/").get(getAllUsers);

export default users;
