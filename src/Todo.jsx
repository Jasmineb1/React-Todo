import React, { useState } from "react";
import './todo.css';
let i=0;
const TODO = (props) => {
  const [task, setTask] = useState('');
  const [addtasks, setAddtasks] = useState([]);
  const [check, setCheck] = useState(false);

  const removeTask = (taskId) => {
    const updatedTasks = addtasks.filter(task => task.id !== taskId);
    setAddtasks(updatedTasks);
  };
  const handleChange = (id) => {
    setCheck(true);
    <li key={id} className= {setCheck ? "none": "check"}></li>
  };

  return (
    <>
      <h1 className="Heading">To-Do List using React</h1>
      <div className="Input">
        <input className="Inputfield" type="text" placeholder="Enter a new task" onChange={e => setTask(e.target.value)} />
        <button className="Addbtn" onClick={() => setAddtasks([...addtasks, { id: i++, task: task }])}>Add Task</button>
      </div>

    
      <ul className="List">
        {addtasks.map(addtask => (
          <li key={addtask.id} className= {setCheck ? "none": "check"}>
            {addtask.task}
            
            <button className="removebtn" onClick={() => removeTask(addtask.id)}>Remove</button>
            <input type="checkbox" check={check} onChange={()=>{handleChange(addtask.id)}}/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TODO;
