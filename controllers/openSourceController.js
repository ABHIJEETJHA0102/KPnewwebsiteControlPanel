const list = require("../models/openSource");

const getAllList = async(req, res) => {
    const myData = await list.find(req.query);
    res.status(200).json({myData});
};
const delete_i = async(req, res) => {
    try {
        await list.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted");
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};

const getByID = async(req, res) => {
    try {
        const find_entry=await list.findById(req.params.id);
        res.status(200).json("Entry found:"+find_entry);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};

const addOneItem = async(req, res) => {
    const newListEntry = new list(req.body);
    try {
        const savedListEntry = await newListEntry.save();
        res.status(200).json("Saved List Entry:"+ savedListEntry);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};

const updateByID = async(req, res) => {
    try {
        const updatedListEntry = await list.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json("Updated List Entry:" + updatedListEntry);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};


module.exports = {getAllList, delete_i, addOneItem, getByID, updateByID};
