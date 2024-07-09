const express = require("express");
const UserController = require("../controllers/UserController");
const route = express.Router();

route.get("/getUSer", UserController.getUSer);
route.post("/InsertUser", UserController.InsertUser);

module.exports = route;
