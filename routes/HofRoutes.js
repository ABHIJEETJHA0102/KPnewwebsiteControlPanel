const express = require('express');
const { getHof,addHof, updateHof,deleteHof} = require('../controllers/Hof_controller.js');

const router = express.Router();

router.route("/getHof").get(getHof);
router.route("/addHof").post(addHof);
router.route("/updateHof/:id").put(updateHof);
router.route("/deleteHof/:id").delete(deleteHof);

module.exports = router;