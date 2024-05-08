const mongoose = require("mongoose");

// const URI = "mongodb+srv://ravi:ravi21061@cluster0.zjzql6s.mongodb.net/mern_admin?retryWrites=true&w=majority";
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB ");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;