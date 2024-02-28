const express = require('express');

const route = express.Router();
const services=require("../services/renderProjects");

route.get("/",services.homeRoutes); 
route.get("/add-project",services.add_project);
route.get("/update-project",services.update_project);

const { getProjects,addProjects, getByID, updateProjects,deleteProjects} = require('./../controllers/projectsController');

route.get("/api/getAllItems",getProjects);
route.post("/api/addOneItem",addProjects);
route.get("/api/getByID/:id",getByID);
route.put("/api/updateByID/:id",updateProjects);
route.delete("/api/deleteOneItem/:id",deleteProjects);

module.exports = route;
