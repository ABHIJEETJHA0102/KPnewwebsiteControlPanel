const express = require('express');
const { home,gymkhana,getAllProjects,getBlogs,addBlogs,addProjects, updateProjects, updateBlogs,deleteBlogs,deleteProjects} = require('./../controllers/viewsController');

const router = express.Router();
router.route('/').get(home);
router.route('/gymkhana').get(gymkhana);
router.route("/getprojects").get(getAllProjects);
router.route("/getblogs").get(getBlogs);
router.route("/addprojects").post(addProjects);
router.route("/addblogs").post(addBlogs);
router.route("/updateprojects/:id").put(updateProjects);
router.route("/updateblogs/:id").put(updateBlogs);
router.route("/deleteprojects/:id").delete(deleteProjects);
router.route("/deleteblogs/:id").delete(deleteBlogs);

module.exports = router;
