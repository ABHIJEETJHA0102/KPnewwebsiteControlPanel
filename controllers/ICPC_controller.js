const ICPC = require('../models/ICPC');



exports.getICPC = async (req, res) => {
    try{
        const icpcData = await ICPC.find();
        res.status(200).json({icpcData});

    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
}

exports.addICPC = async (req, res) => {
    try{
        const {Team_name, Rank, description, image} = req.body;

        const ICPC_data = new ICPC({Team_name, Rank, description, image});
        const saved = await ICPC_data.save();
        res.status(200).json({saved});
    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
}


exports.updateICPC = async (req, res) => {
    const {Team_name, Rank, description, image} = req.body;
    try{
        const updated = {};
        if(Team_name) updated.Team_name = Team_name;
        if(Rank) updated.Rank = Rank;
        if(description) updated.description = description;
        if(image) updated.image = image;

        let icpcData = await ICPC.findById(req.params.id);
        if(!icpcData) return res.status(404).json({msg: "Not found"});

        icpcData  = await ICPC.findByIdAndUpdate(req.params.id, {$set: updated}, {new: true});
        res.status(200).json({icpcData});


    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
}

exports.deleteICPC = async (req, res) => {
    try{
        let icpcData = await ICPC.findById(req.params.id);
        if(!icpcData) return res.status(404).json({msg: "Not found"});

        await ICPC.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: "Deleted successfully"});
    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
}