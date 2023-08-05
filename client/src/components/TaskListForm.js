import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function TaskListForm() {
    const [list, setList] = useState('');
    const [newListName, setNewListName] = useState('');

    const handleSubmitList = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('../app/controllers/task_lists_controller.rb', { name: newListName });
            setList([...list, response.data]);
            setNewListName('');
        } catch (error) {
            console.error('Error creating task list:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmitList} className='TaskForm'>
                <input type='text' value={newListName} onChange={(e) => setNewListName(e.target.value)} className='task-input' placeholder='New Task List' />
                <button type='submit' className='task-btn'>Add List</button>

            </form>
        </>
    )
}

export default TaskListForm

// const CustomTag = styled.div`

// `