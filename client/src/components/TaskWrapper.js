import React from 'react'
import TaskForm from './TaskForm';
import TaskListForm from './TaskListForm';


function TaskWrapper() {
    return (
        <div>
            <TaskListForm />
            <TaskForm />
        
        </div>
    )
}

export default TaskWrapper