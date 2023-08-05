import React, { useState } from 'react';
import axios from 'axios';


function EditTaskListForm({editList, list}) {
  const [value, setValue] = useState(list.list);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await axios.put(`../app/controllers/task_lists_controller.rb/${task.id}`, { task: value });
          editList(value, list.id);
      } catch (error) {
          console.error('Error updating list:', error);
      }
  };

  return (
      <form onSubmit={handleSubmit} className="TodoForm">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="task-input"  placeholder='Update list'/>
          <button type="submit" className='task-btn'>Update List</button>
      </form>
  )
}


export default EditTaskListForm