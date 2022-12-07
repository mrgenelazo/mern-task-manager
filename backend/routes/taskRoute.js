const express = require("express");
const {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const Task = require("../models/taskModel");
const router = express.Router();

//Get/Read All Tasks
router.get("/api/tasks", getTasks);

//Get Single Task
router.get("/api/task/:id", getTask);

//Create a task
router.post("/api/tasks", createTask);

//Delete Task
router.delete("/api/task/:id", deleteTask);

//Update Task
router.put("/api/task/:id", updateTask);

module.exports = router;
