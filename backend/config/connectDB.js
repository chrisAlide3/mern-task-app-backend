const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // process.env points to the .env file. Don't forget to require the dotenv package in the server.js file
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// Use this function in server.js to connect to mongoDB and start the server if you use this method
// Method 1 with seperate connectDB file

// MongoDB needs to be connected before we start the server
// const startServer = async () => {
//   try {
//     // Wait for MongoDB to be connected before starting the server
//     const connection = await connectDB();
//     // Starting server on port from .env file (for depoying app on Heroku or other) or set to 5000
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();
