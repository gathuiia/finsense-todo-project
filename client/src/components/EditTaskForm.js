import React, { useState } from 'react';
import axios from 'axios';

function EditTaskForm(editTask, task) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await axios.put(`../app/controllers/tasks_controller.rb/${task.id}`, { task: value });
          editTask(value, task.id);
      } catch (error) {
          console.error('Error updating task:', error);
      }
  };

  return (
      <form onSubmit={handleSubmit} className="TodoForm">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="task-input"  placeholder='Update task'/>
          <button type="submit" className='task-btn'>Update Task</button>
      </form>
  )
}


export default EditTaskForm