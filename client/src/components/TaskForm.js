import React, { useState } from 'react';
import axios from 'axios';

function TaskForm(addTask) {
    const [task, setTask] = useState('');
    const [newTaskName, setNewTaskName] = useState('');

    const handleSubmitTask = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post('../app/controllers/tasks_controller.rb', { name: newTaskName });
            setTask([...task, response.data]);
            setNewTaskName('');
        } catch(error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmitTask} className='TaskForm'>
            <input type='text' value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} className='task-input' placeholder='New Task'></input>
            <button type='submit' className='task-btn'>Add Task</button>
        </form>
    
    )
}

export default TaskForm