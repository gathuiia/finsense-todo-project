import React, { useState } from 'react';

function TaskListForm(addList) {
    const [value, setValue] = useState('');

    const handleSubmit = function(e) {

        e.preventDefault();
        if (value){
            addList(value);
            console.log(value)
            setValue('');
        }

    };
    
    return (
        <form onSubmit={handleSubmit} className='ListForm'>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='task-input' placeholder='New Task List'/>
            <button type='submit' className='task-btn'>Add List</button>
        </form>
    )
}

export default TaskListForm