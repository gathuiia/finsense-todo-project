import React, { useState } from 'react'
import TaskForm from './TaskForm';
import TaskListForm from './TaskListForm';


function TaskWrapper() {
    return (
        <div className='wrapper'>
            <TaskListForm />
            <TaskForm />
        </div>
    )
}

export default TaskWrapper