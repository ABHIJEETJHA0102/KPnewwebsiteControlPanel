const express = require("express");
const router = express.Router();

const { getAllitems, deleteOneItem, addOneItem, getByID, updateByID } = require("../controllers/interIIT_controller");
router.route("/getAllItems").get(getAllitems);
router.route("/getByID/:id").get(getByID);
router.route("/updateByID/:id").put(updateByID);
router.route("/deleteOneItem/:id").delete(deleteOneItem);
router.route("/addOneItem").post(addOneItem);

module.exports = router;