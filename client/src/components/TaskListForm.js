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
            <form onSubmit={handleSubmitList}>
                <InputTag type='text' value={newListName} onChange={(e) => setNewListName(e.target.value)} placeholder='New Task List' />
                <BtnTag type='submit'>Add List</BtnTag>

            </form>
        </>
    )
}

export default TaskListForm

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