import React,{useState} from 'react';
import './ToDoList.css'; 

function ToDoList() {
    const [tasks, setTasks] = useState([]);

    const handleAddChange =() =>{
        const newtask = document.getElementById("inputtask").value;
        if (newtask.trim() !== '') {
            setTasks([...tasks,newtask]);
            document.getElementById("inputtask").value ="";
        }
    }
    
    const handleRemoveChange =(index) =>{
        setTasks(tasks => tasks.filter((_, i) => i !== index));
    }
    
    const MovetaskTop =(task) =>{
        const tas = tasks.filter((t,_) => t !== task);
        setTasks(tasks => [task,...tas]);
    }

    const MovetaskBottom =(task) =>{
        const tas = tasks.filter((t,_) => t !== task);
        setTasks(tasks => [...tas, task]);
    } 
   
    const MovetaskUp =(index) =>{
        if(index === 0) return;
        const newTasks = [...tasks];
        [newTasks[index],newTasks[index-1]] = [newTasks[index-1],newTasks[index]];
        setTasks(newTasks);
    }

    const MovetaskDown =(index) =>{
         if(index === tasks.length - 1) return; 
        const newTasks = [...tasks];
        [newTasks[index],newTasks[index+1]] = [newTasks[index+1],newTasks[index]];
        setTasks(newTasks);
    } 

    return (
      <div className="todo-container">
        <h1 className="todo-title">To Do List</h1>
        <div className="input-section">
          <input 
            type="text" 
            id="inputtask" 
            placeholder="Enter a task"
            className="task-input"
          />
          <button onClick={handleAddChange} className="add-btn">Add</button>
        </div>
        <ul className="task-list">
            {tasks.map((task,index) => (
              <li key={index} className="task-item">
                 <div className="task-content">
                    <span className="task-text">{task}</span>
                    <div className="task-buttons">
                      <button onClick={() => handleRemoveChange(index)} className="btn delete-btn">Delete</button>
                      <button onClick={() => MovetaskUp(index)} className="btn move-btn">↑</button>
                      <button onClick={() => MovetaskDown(index)} className="btn move-btn">↓</button>
                      <button onClick={() => MovetaskTop(task)} className="btn move-btn">Top</button>
                      <button onClick={() => MovetaskBottom(task)} className="btn move-btn">Bottom</button>
                    </div>
                 </div>
              </li>
            ))}
        </ul>
      </div>
    )
}

export default ToDoList;