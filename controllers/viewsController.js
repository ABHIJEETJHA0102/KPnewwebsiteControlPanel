const connectDB = require('../config/db')
require("dotenv").config({path:"config/.env"})

const Project = require('../models/Project')
const Blog = require('../models/Blog')

exports.home = async (req, res) => {
    try {
        context = {
            title: 'home',
        };
        res.render('index', context);
    } catch (err) {
        res.status(400).send({ Error: err });
    }
};

exports.gymkhana=async(req,res)=>{
    try {
        context={
            title:"gymkhana",
        };
        res.render("gymkhana/index.ejs",context);
    } catch (error) {
        res.status(400).send({Error:err});
    }
}

exports.getAllProjects = async (req,res)=>{
    try {
        await connectDB()
        const data = await Project.find({});
        res.json(data);
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

exports.getBlogs = async (req,res)=>{
    try {
        await connectDB()
        const data = await Blog.find({});
        res.json(data);
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

exports.addProjects = async (req,res)=>{
    try {
        const { title, description, githubLink, buttonText,short_desc } = req.body;

        const project = new Project({
            title, description, githubLink, buttonText,short_desc
        })
        const savedProject = await project.save()

        res.json(savedProject)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.addBlogs = async (req,res)=>{
    try {
        const { title, description,short_desc,images } = req.body;

        const blog = new Blog({
            title, description,short_desc,images
        })
        const savedBlog = await blog.save()

        res.json(savedBlog)

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

exports.updateBlogs = async (req,res)=>{
    const { title, description,short_desc,images } = req.body;
    try {
        const newBlog = {};
        if (title) { newBlog.title = title };
        if (description) { newBlog.description = description };
        if (images) { newBlog.images = images };
        if (short_desc) { newBlog.short_desc = short_desc };

        let blog = await Blog.findById(req.params.id);
        if (!blog) { return res.status(404).send("Not Found") }

        blog = await Blog.findByIdAndUpdate(req.params.id, { $set: newBlog }, { new: true })
        res.json({ blog });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}

exports.deleteBlogs = async (req,res)=>{
    try {
        let blog = await Blog.findById(req.params.id);
        if (!blog) { return res.status(404).send("Not Found") }

        blog = await Blog.findByIdAndDelete(req.params.id)
        res.json({ "Success": "blog has been deleted", blog: blog });
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



    