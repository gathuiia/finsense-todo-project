import React from 'react'

function TaskForm() {
  return (
    <div>
        <form className='TaskForm'>
        <input type='text' className='task-input' placeholder='New Task'></input>
        <button type='submit' className='task-btn'>Add Task</button>
        </form>
    </div>
    
  )
}

export default TaskForm