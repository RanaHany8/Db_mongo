const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
     "mongodb+srv://Nadia:Nadia123@cluster0.2ebwdus.mongodb.net/?appName=Cluster0"
    );
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Error connecting to database", err);
  }
};

module.exports = connection;
