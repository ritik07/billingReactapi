const express = require("express");
const route = express.Router();

const { getRavanaFunction } = require("../../controller/getRavana");
const { insertRavanaFunction } = require("../../controller/insertRavana");
const { updateRavanaFunction } = require("../../controller/updateRavana");
const { deleteRavanaFuction } = require("../../controller/deleteRavana");

route.get("/getravana/", getRavanaFunction);
route.get("/getravana/:iRavanaID", getRavanaFunction);

route.post("/insertravana", insertRavanaFunction);
route.post("/updateravana", updateRavanaFunction);
route.post("/deleteravana", deleteRavanaFuction);

module.exports = { routes: route };
