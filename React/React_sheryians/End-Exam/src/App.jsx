import React, { useState } from 'react';
import Form from './components/Form.jsx';
import TaskList from './components/TaskList.jsx';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  
  const toggleStatus = (id) => {
    setTasks(prev =>
       prev.map(task =>
      task.id === id
        ? { ...task, status: task.status === "Pending" ? "Done" : "Pending" }
        : task
    )
    )
  }

  const deleteTask = (id) => {
      setTasks(prev => prev.filter(task => task.id != id))
  }
  return (
    <>
      <h1>Student Task Tracker – Practice Lab</h1>
      <h2>Adding Tasks</h2>
      <Form addTask={addTask} />

      <h2>List of Tasks</h2>
      <TaskList tasks={tasks} toggleStatus = {toggleStatus} deleteTask ={deleteTask} />
    </>
  );
};

export default App;

