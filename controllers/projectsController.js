const Project = require('../models/Project')

const connectDB = require('../config/db')
require("dotenv").config({path:"config/.env"})

exports.getProjects = async (req,res)=>{
    try {
        await connectDB()
        const data = await Project.find({});
        res.json(data);
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

exports.getByID = async(req, res) => {
    try {
        const find_project=await Project.findById(req.params.id);
        res.status(200).json( find_project );
    } catch (err) {
        res.status(400).json({ error: 'Error: ' + err });
    }
};

exports.addProjects = async (req,res)=>{
    try {
        const { title, description, githubLink, buttonText,short_desc } = req.body;
        const project = new Project({
            title, description, githubLink, buttonText,short_desc
        })
        const savedProject = await project.save()
        res.redirect("/projects/add-project");

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.updateProjects = async (req,res)=>{
    const { title, description,  githubLink, buttonText,short_desc } = req.body;
    try {
        const newProject = {};
        if (title) { newProject.title = title };
        if (description) { newProject.description = description };
        if (githubLink) { newProject.githubLink = githubLink };
        if (buttonText) { newProject.buttonText = buttonText };
        if (short_desc) { newProject.short_desc = short_desc };
        let project = await Project.findById(req.params.id);

        if (!project) { return res.status(404).send("Not Found") }
        
        project = await Project.findByIdAndUpdate(req.params.id, { $set: newProject }, { new: true })

        res.json({ project });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.deleteProjects = async (req,res)=>{
    try {
        let project = await Project.findById(req.params.id);
        if (!project) { return res.status(404).send("Not Found") }
        
        project = await Project.findByIdAndDelete(req.params.id)
        res.json({ "Success": "project has been deleted", project: project });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
