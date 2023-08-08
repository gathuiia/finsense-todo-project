import React, { useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';

function TaskForm() {
    const [task, setTask] = useState('');
    const [newTaskName, setNewTaskName] = useState('');

    const handleSubmitTask = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('../app/controllers/tasks_controller.rb', { name: newTaskName });
            setTask([...task, response.data]);
            setNewTaskName('');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmitTask} className='TaskForm'>
            <InputTag><input type='text' value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} placeholder='New Task'></input></InputTag>
            <BtnTag><button type='submit'>Add Task</button></BtnTag>
        </form>

    )
}

export default TaskForm

const InputTag = styled.input`
    outline: none;
    background: none;
    border: 1px solid #a51b31;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 300px;
    color: #fff;
`

const BtnTag = styled.button`
    background: #a51b31;
    color: #fff;
    border: none;
    padding: 0.55rem;
    cursor: pointer; 
`
