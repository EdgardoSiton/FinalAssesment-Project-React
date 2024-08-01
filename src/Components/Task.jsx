import React from "react";
import "../index.css";

const Task = ({ task, toggleStatus }) => {
  return (
    <li className={`task ${task.assignee.toLowerCase()}`}>
      <div className="task-header">No: {task.id}</div>
      <div>Task Description: {task.description}</div>
      <div>Assignee: {task.assignee}</div>
      {task.status === "Pending" && <div>Deadline: {task.deadline}</div>}
      <div>Status: {task.status}</div>
      <button onClick={() => toggleStatus(task.id)}>Toggle Status</button>
    </li>
  );
};

export default Task;
