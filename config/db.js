const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // const Database = "mongodb://localhost:27017/xpecto"
        //  const Database = "mongodb+srv://KamandPrompt:jpNElIJGf8sqrNo3@cluster0.tqssube.mongodb.net/Kamandpromptwebsite?retryWrites=true&w=majority"
         const Database = "mongodb+srv://KamandPrompt:jpNElIJGf8sqrNo3@cluster0.tqssube.mongodb.net/?retryWrites=true&w=majority"
        //  const Database = process.env.DATABASE_URI.replace(
        //      "<password>",
        //      process.env.DATABASE_PASSWORD
        //  );
        mongoose
            .connect(Database, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => console.log("DB connection successful!"));
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
