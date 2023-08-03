import React from 'react'

function TaskListForm() {
    
    return (
        <form className='ListForm'>
          <input type='text' className='task-input' placeholder='New Task List'/>
          <button type='submit' className='task-btn'>Add List</button>
        </form>
    )
}

export default TaskListForm