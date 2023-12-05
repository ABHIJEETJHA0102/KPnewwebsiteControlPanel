const Hof = require('../models/Hof');




exports.getHof = async (req, res) => {
    try{
        const HofData = await Hof.find();
        res.status(200).json({HofData});

    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
}

exports.addHof = async (req, res) => {
    try{
        const {Name,description, image} = req.body;

        const Hof_data = new Hof({Name, description, image});
        const saved = await Hof_data.save();
        res.status(200).json({saved});  
    }
    catch(error){
        console.error(error.message);
        res.status(500).json({msg: error.message});
    }
}


exports.updateHof = async (req, res) => {
    const {Name, description, image} = req.body;
    try{
        const updated = {};
        if(Name) updated.Name = Name;
        if(description) updated.description = description;
        if(image) updated.image = image;

        let HofData = await Hof.findById(req.params.id);
        if(!HofData) return res.status(404).json({msg: "Not found"});

        HofData  = await Hof.findByIdAndUpdate(req.params.id, {$set: updated}, {new: true});
        res.status(200).json(HofData);
    } catch(err) {
        res.status(500).json({msg: "Server error"});
    }
}

exports.deleteHof = async (req, res) => {
    try{
        let HofData = await Hof.findById(req.params.id);
        if(!HofData) return res.status(404).json({msg: "Not found"});

        await Hof.findByIdAndDelete(req.params.id);
        res.status(200).json({msg: "Deleted successfully"});
    }
    catch(error){
        res.status(500).json({msg: error.message});
    }
}