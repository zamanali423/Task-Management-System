const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  asignee: {
    type: String,
  },
  createDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: String,
  },
  status: {
    type: String,
  },
  creater: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("tasks", taskSchema);
