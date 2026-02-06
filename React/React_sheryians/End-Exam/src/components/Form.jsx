import React, { useState } from "react";

const Form = (props) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const t = {
        id        :Date.now(),
        title     :task,
        priority  :priority,
        status    :status
    }
   
    props.addTask(t);

    setTask("");
    setPriority("Low");
    setStatus("Pending");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Task Title</h2>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter Task Title"
        />

        <h2>Priority</h2>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <h2>Status</h2>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>Done</option>
        </select>

        <br /><br />

        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default Form;
