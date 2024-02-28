const mongoose=require('mongoose');

const openSourceModel = mongoose.Schema({
    name:{
        type:String,
        required: [true,"Name required"],
    },
    Event:{
        type:String,
        required: [true,"Event name required"],
    },
    year:{
        type:Number,
        required: [true,"Year required"],
    },
    company:{
        type:String,
        required: [true," Company Name required"],
    },
    photo_link:{
        type:String,
        required: [true," Photo link required"],
    },
    github_link:{
        type:String,
        required: [true," Github link required"],
        unique:true,
    },
    linkedin_link:{
        type:String,
        required: [true," LinkedIn link required"],
        unique:true,
    },
    fb_link:{
        type:String,
        // required: [true," Facebook link required"],
        unique:true
    },
});

module.exports =mongoose.model("openSourceModel",openSourceModel)