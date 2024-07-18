import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext/userContext";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import UpdateTask from "./UpdateTask";
import { toast } from "react-toastify";

const GetTask = () => {
  const { user, logout } = useContext(userContext);
  const [userTasks, setUserTasks] = useState([]);
  const [choice, setChoice] = useState("ascending");
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    id: "",
    title: "",
    description: "",
    asignee: "",
    createDate: "",
    dueDate: "",
    priority: "",
    status: "",
  });

  //! Get Tasks
  const getTasks = async () => {
    if (!user) {
      console.error("User not available");
      return;
    }
    try {
      const { email } = user;
      const response = await fetch(`http://localhost:3001/tasks/${email}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
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
        setUserTasks(data);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  //! Update Task
  const handleUpdate = (task) => () => {
    setInputFields({
      id: task._id,
      title: task.title,
      description: task.description,
      asignee: task.asignee,
      createDate: task.createDate
        ? new Date(task.createDate).toISOString().slice(0, 10)
        : "",
      dueDate: task.dueDate
        ? new Date(task.dueDate).toISOString().slice(0, 10)
        : "",
      priority: task.priority,
      status: task.status,
    });
  };

  //! Delete Task
  const deleteTask = async (task) => {
    if (!user) {
      console.error("User not available");
      return;
    }
    try {
      const response = await fetch(
        `http://localhost:3001/tasks/deleteTask/${task._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
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
        const deletedTask = await response.json();
        setUserTasks((prevTasks) =>
          prevTasks.filter((t) => t._id !== task._id)
        );
        toast.success(deletedTask.msg);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  //! Sort Tasks
  const sortTasks = async () => {
    if (!user) {
      console.error("User not available");
      return;
    }
    try {
      const { email } = user;
      const response = await fetch(
        `http://localhost:3001/tasks/sortTask/${email}?sort=${choice}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        toast.error(data.msg);
      } else {
        const sortedTasks = await response.json();
        setUserTasks(sortedTasks);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleChoice = (e) => {
    const selectedChoice = e.target.value;
    setChoice(selectedChoice);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="container">
        <label htmlFor="choice">Sorting:</label>
        <select
          name="choice"
          id="choice"
          value={choice}
          onChange={handleChoice}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <button className="btn btn-primary ms-2" onClick={sortTasks}>
          Sort
        </button>

        <h2>Task List</h2>
        <table className="task-table">
          <thead>
            <tr>
              <th>Task #</th>
              <th>Title</th>
              <th>Description</th>
              <th>Assignee</th>
              <th>Create Date</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Creator</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userTasks &&
              userTasks.map((task, index) => (
                <tr key={task._id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description.slice(0, 10)}...</td>
                  <td>{task.asignee}</td>
                  <td>
                    {task.createDate
                      ? new Date(task.createDate).toISOString().slice(0, 10)
                      : ""}
                  </td>
                  <td>
                    {task.dueDate
                      ? new Date(task.dueDate).toISOString().slice(0, 10)
                      : ""}
                  </td>
                  <td>{task.priority}</td>
                  <td>{task.status}</td>
                  <td>{task.creater}</td>
                  <td>
                    <FontAwesomeIcon
                      className="ms-2 icon"
                      icon={faPenSquare}
                      onClick={handleUpdate(task)}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                    <FontAwesomeIcon
                      className="ms-3 icon"
                      icon={faTrashAlt}
                      onClick={() => deleteTask(task)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <UpdateTask
                inputFields={inputFields}
                setInputFields={setInputFields}
                setUserTasks={setUserTasks}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetTask;
