const Task = require("../models/taskModel");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    // destructures the params object
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: `No task found with ID: ${id}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json(`There is no Task with ID: ${id}`);
    }
    res.status(200).send("Task deleted");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      // argument new=true returns the updated document instead of the original one
      // argument runValidators will use the validation rules defined in the Mongoose Schema
      { _id: id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!task) {
      return res.status(404).json(`No Task found with ID: ${id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
};
