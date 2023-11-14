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
        const { title, description, githubLink, buttonText } = req.body;

        const project = new Project({
            title, description, githubLink, buttonText 
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
        const { title, description } = req.body;

        const blog = new Blog({
            title, description
        })
        const savedBlog = await blog.save()

        res.json(savedBlog)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}


    