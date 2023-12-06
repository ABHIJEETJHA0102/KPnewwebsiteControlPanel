const express = require('express');
const { getICPC,addICPC, updateICPC,deleteICPC} = require('../controllers/ICPC_controller');

const router = express.Router();

router.route("/getICPC").get(getICPC);
router.route("/addICPC").post(addICPC);
router.route("/updateICPC/:id").put(updateICPC);
router.route("/deleteICPC/:id").delete(deleteICPC);

module.exports = router;

