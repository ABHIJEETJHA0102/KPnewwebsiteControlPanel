const axios=require("axios");

exports.homeRoutes=(req,res)=>{
    axios.get("http://localhost:5000/projects/api/getAllItems")
    .then(function(response){
        res.render('projectsviews/index', { projects : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.add_project=(req,res)=>{
    res.render("projectsviews/add_project");
}

exports.update_project=(req,res)=>{
    const projectId = req.query.id;
    axios.get(`http://localhost:5000/projects/api/getByID/${projectId}`)
        .then(function(projectdata){
            res.render("projectsviews/update_project", { project : projectdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
    