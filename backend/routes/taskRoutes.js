// this file has to be required in server.js and added as a middleware
const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const router = express.Router();

// We can define the controllers to be run through the router.route for each path and methods
// router.route("/").get(getAllTasks).post(createTask);
// router
//   .route("/:id")
//   .get(getTask)
//   .delete(deleteTask)
//   .put(updateTask)
//   .patch(updateTask);

// Routes
// -----------------------------------

// Base route is passed in by the Server middleware
router.post("/", createTask);
router.get("/", getAllTasks);
// id is the route parameter it will be in the req.params Object
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
// put needs all the fields to update the data
router.put("/:id", updateTask);
// patch only needs the field(s) that need to be updated
router.patch("/:id", updateTask);

module.exports = router;
