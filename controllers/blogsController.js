const Blog = require('../models/Blog')

const connectDB = require('../config/db')
require("dotenv").config({path:"config/.env"})

exports.getBlogs = async (req,res)=>{
    try {
        await connectDB()
        const data = await Blog.find({});
        res.json(data);
      } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
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
