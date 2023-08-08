import React, { useState } from 'react'
import axios from 'axios';
import TaskList from './TaskList';
import TaskListForm from './TaskListForm';
import EditTaskListForm from './EditTaskListForm';
import TaskForm from './TaskForm';
import Task from './Task';
import EditTaskForm from './EditTaskForm';
import { styled } from 'styled-components';



function TaskWrapper() {
    const [lists, setLists] = useState([]);
    const [tasks, setTasks] = useState([]);

    //For the Task Lists:
    const addList = async (list) => {
        try {
            const response = await axios.post('../app/controllers/task_lists_controller.rb', { list: list, isEditing: false });
            setLists([...lists, response.data]);
        } catch (error) {
            console.error('Error adding list:', error);
        };
    };

    const editList = (id) => {
        setLists(
            lists.map((list) =>
                list.id === id ? { ...list, isEditing: !list.isEditing } : list
            )
        );
    };

    const deleteList = (id) => setLists(lists.filter((list) => list.id !== id));

    //For the Tasks:
    const addTask = async (task) => {
        try {
            const response = await axios.post('../app/controllers/tasks_controller.rb', { task: task, isEditing: false });
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error('Error adding task:', error);
        };
    };

    const editTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, isEditing: !task.isEditing } : task
            )
        );
    };

    const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

    return (
        <div>
            <AppTitle> Get things Done! </AppTitle>
            <WrapperTag>
                <TaskListForm addList={addList} />
                {/* Displaying Lists */}
                {lists.map((list) =>
                    list.isEditing ? (
                        <EditTaskListForm editList={editList} list={list} />
                    ) : (
                        <TaskList
                            key={list.id}
                            list={list}
                            deleteList={deleteList}
                            editList={editList} />
                    )
                )}

                <TaskForm addTask={addTask} />
                {/* Displaying Tasks */}
                {tasks.map((task) =>
                    task.isEditing ? (
                        <EditTaskForm editTask={editTask} task={task} />
                    ) : (
                        <Task
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            editTask={editTask} />
                    )
                )}
            </WrapperTag>
        </div>
    )
}

export default TaskWrapper

const WrapperTag = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    background-color: #212121;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const AppTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #fff;
`


