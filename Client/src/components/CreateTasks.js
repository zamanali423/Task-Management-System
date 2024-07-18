import React, { useContext, useState } from "react";
import { userContext } from "../context/userContext/userContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Tasks = ({ setShowCreateTasks }) => {
  const { user, logout } = useContext(userContext);
  const navigate = useNavigate();
  const [inputFields, setinputFields] = useState({
    title: "",
    description: "",
    asignee: "",
    createDate: "",
    dueDate: "",
    priority: "Low",
    status: "To Do",
  });

  const handleInput = (e) => {
    setinputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error("User not available");
      return;
    }
    const { email, fullName } = user;
    try {
      const response = await fetch(
        "http://localhost:3001/tasks/createTask/newTask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            ...inputFields,
            asignee: inputFields.asignee,
            createDate: inputFields.createDate,
            dueDate: inputFields.dueDate,
            priority: inputFields.priority,
            status: inputFields.status,
            creater: fullName,
            email: email,
          }),
        }
      );

      if (response.status === 401) {
        const data = await response.json();
        if (data.msg === "Token Expired. Please log in again.") {
          logout();
          navigate("/login");
        } else {
          console.error("Unauthorized access");
        }
      } else {
        const data = await response.json();
        console.log(data);
        toast.success(data.msg);
        setinputFields({
          title: "",
          description: "",
          asignee: "",
          createDate: "",
          dueDate: "",
          priority: "Low",
          status: "To Do",
        });
        setShowCreateTasks(false);
      }
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="mainForm2">
      <div className="container2">
        <form className="task-form" onSubmit={handleSubmit}>
          <h2>Create a Task</h2>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={inputFields.title}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={inputFields.description}
              onChange={handleInput}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="assignee">Assignee</label>
            <input
              type="text"
              id="assignee"
              name="asignee"
              value={inputFields.asignee}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="createDate">Create Date</label>
            <input
              type="date"
              id="createDate"
              name="createDate"
              value={inputFields.createDate}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={inputFields.dueDate}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={inputFields.priority}
              onChange={handleInput}
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={inputFields.status}
              onChange={handleInput}
              required
            >
              <option value="to-do">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <button className="button" type="submit">
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tasks;
