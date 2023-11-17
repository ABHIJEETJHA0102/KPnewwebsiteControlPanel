const express = require('express');
const { getProjects,addProjects, updateProjects,deleteProjects} = require('./../controllers/projectsController');

const router = express.Router();
router.route("/get").get(getProjects);
router.route("/add").post(addProjects);
router.route("/update/:id").put(updateProjects);
router.route("/delete/:id").delete(deleteProjects);

module.exports = router;
