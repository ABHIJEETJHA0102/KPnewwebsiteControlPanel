const express = require('express');
const { getBlogs,addBlogs, updateBlogs,deleteBlogs} = require('./../controllers/blogsController');

const router = express.Router();
router.route("/get").get(getBlogs);
router.route("/add").post(addBlogs);
router.route("/update/:id").put(updateBlogs);
router.route("/delete/:id").delete(deleteBlogs);

module.exports = router;
