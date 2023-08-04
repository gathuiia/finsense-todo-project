import React, { useState } from 'react';

function TaskForm({addTask}) {
    const [value, setValue] = useState('');

    const handleSubmit = function(e) {

        e.preventDefault();
        if (value){
            addTask(value);
            console.log(value)
            setValue('');
        }

    };

    return (
        <form onSubmit={handleSubmit} className='TaskForm'>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='task-input' placeholder='New Task'></input>
            <button type='submit' className='task-btn'>Add Task</button>
        </form>
    
    )
}

export default TaskForm