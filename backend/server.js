const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes.js");

// initialise express
const app = express();
// Set the port from .env when deploying to heroku or other hosters
const PORT = process.env.PORT || 5000;

// mongoose call is asynchronous so no need of an async function
mongoose
  .connect(process.env.MONGO_URI)
  // .then is only run after the connection was succesfull. If not the .catch function will be called
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Middleware
// -----------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Allows access from frontend
app.use(
  cors({
    origin: ["http://localhost:3000", "https://mern-task-app.onrender.com"],
  })
);
// First argument is the base path of the routes
app.use("/api/tasks", taskRoutes);
