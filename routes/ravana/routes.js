const express = require("express");
const route = express.Router();

const { getRavanaFunction } = require("../../controller/getRavana");
const { insertRavanaFunction } = require("../../controller/insertRavana");
const { updateRavanaFunction } = require("../../controller/updateRavana");
const { deleteRavanaFuction } = require("../../controller/deleteRavana");

route.get("/getdata", getRavanaFunction);
// route.get("/getravana/:iRavanaID", getRavanaFunction);

route.post("/insertdata", insertRavanaFunction);
route.post("/updatedata", updateRavanaFunction);
route.post("/deletedata", deleteRavanaFuction);

module.exports = { routes: route };
