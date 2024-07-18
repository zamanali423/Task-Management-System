const express = require("express");
const Tasks = require("../../database/tasksDatabase/tasks");

const router = express.Router();

//! Get Task
router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const task = await Tasks.find({ email });
    if (!task) {
      return res.status(404).json({ msg: "Tasks Not Found" });
    }
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

//! Create Task
router.post("/createTask/newTask", async (req, res) => {
  const {
    title,
    description,
    asignee,
    createDate,
    dueDate,
    priority,
    status,
    creater,
    email,
  } = req.body;
  try {
    const task = new Tasks({
      title,
      description,
      asignee,
      createDate,
      dueDate,
      priority,
      status,
      creater,
      email,
    });
    await task.save();
    return res.status(201).json({ msg: "Task Create Successfully", task });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

//! Update Task
router.put("/updateTask/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, asignee, createDate, dueDate, priority, status } =
    req.body;
  try {
    const task = await Tasks.findByIdAndUpdate(
      id,
      {
        title,
        description,
        asignee,
        createDate,
        dueDate,
        priority,
        status,
      },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ msg: "Task Not Found" });
    }
    return res.status(200).json({ msg: "Task Update Successfully", task });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

//! Delete Task
router.delete("/deleteTask/:id", async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    asignee,
    createDate,
    dueDate,
    priority,
    status,
    creater,
    email,
  } = req.body;
  try {
    const task = await Tasks.findByIdAndDelete(id, {
      title,
      description,
      asignee,
      createDate,
      dueDate,
      priority,
      status,
      creater,
      email,
    });
    if (!task) {
      return res.status(404).json({ msg: "Task Not Found" });
    }
    return res.status(200).json({ msg: "Task Deleted Successfully", task });
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

//! Sort Tasks
router.get("/sortTask/:email", async (req, res) => {
  const { email } = req.params;
  const { sort } = req.query;
  try {
    let sortCriteria = {};
    if (sort === "ascending") {
      sortCriteria = { title: 1 };
    } else {
      sortCriteria = { title: -1 };
    }

    const tasks = await Tasks.find({ email }).sort(sortCriteria);

    if (!tasks.length) {
      return res.status(404).json({ msg: "Tasks Not Found" });
    }
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error", error });
  }
});

module.exports = router;
