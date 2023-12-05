const express = require("express");
const router = express.Router();
const list = require("../models/openSource");

const { getAllList, delete_i, addOneItem, getByID, updateByID } = require("../controllers/openSourceController");
router.route("/getAllItems").get(getAllList);
router.route("/getByID/:id").get(getByID);
router.route("/updateByID/:id").put(updateByID);
router.route("/deleteOneItem/:id").delete(delete_i);
router.route("/addOneItem").post(addOneItem);

module.exports = router;