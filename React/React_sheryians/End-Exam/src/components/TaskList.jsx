import React from 'react';

const TaskList = (props) => {
  return (
    <>
      {props.tasks.map((task) => (
        <div key={task.id}>
          <p>Task Title : {task.title}</p>
          <p>Priority   : {task.priority}</p>
          <p>Status     : {task.status}</p>
          <button onClick={() => props.toggleStatus(task.id)}>
            {task.status === "Pending" ? "Mark Done" : "Mark Pending"}
          </button>
           
           <button onClick={() => props.deleteTask(task.id)}>
              Delete
           </button>
          <hr />
        </div>
      ))}
    </>
  );
};

export default TaskList;

