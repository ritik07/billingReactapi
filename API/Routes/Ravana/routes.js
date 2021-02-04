const express = require("./node_modules/express");
const route = express.Router();

const { getRavanaFunction } = require("../../Controller/Ravana/getRavana");
const {
  insertRavanaFunction,
} = require("../../Controller/Ravana/insertRavana");
const {
  updateRavanaFunction,
} = require("../../Controller/Ravana/updateRavana");
const { deleteRavanaFuction } = require("../../Controller/Ravana/deleteRavana");

route.get("/getravana/", getRavanaFunction);
route.get("/getravana/:iRavanaID", getRavanaFunction);

route.post("/insertravana", insertRavanaFunction);
route.post("/updateravana", updateRavanaFunction);
route.post("/deleteravana", deleteRavanaFuction);

module.exports = route;