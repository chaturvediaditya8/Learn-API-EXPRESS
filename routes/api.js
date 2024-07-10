const express = require("express");
const UserController = require("../controllers/UserController");
const route = express.Router();

route.get("/getUSer", UserController.getUSer);
route.post("/InsertUser", UserController.InsertUser);
route.post("/VerifyLogin",UserController.VerifyLogin);
route.get("/DisplayUser",UserController.UserDisplay)

module.exports = route;
