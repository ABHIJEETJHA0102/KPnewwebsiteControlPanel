const express = require('express');
const { home,gymkhana,getAllProjects,getBlogs,addBlogs,addProjects} = require('./../controllers/viewsController');

const router = express.Router();
router.route('/').get(home);
router.route('/gymkhana').get(gymkhana);
router.route("/getprojects").get(getAllProjects);
router.route("/getblogs").get(getBlogs);
router.route("/addprojects").post(addProjects);
router.route("/addblogs").post(addBlogs);

module.exports = router;
