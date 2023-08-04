import React, { useState } from 'react'
import TaskForm from './TaskForm';
import TaskListForm from './TaskListForm';


function TaskWrapper() {
    const [lists, setLists] = useState([]);
    const [tasks, setTasks] = useState([]);    

    const addList = list => {
        setLists([...lists, ])
    }

    return (
        <div>
            <TaskListForm />
            <TaskForm />
        
        </div>
    )
}

export default TaskWrapper