import React from 'react'
import styled from 'styled-components'

function Task({ task, editTask, deleteTask }) {

  return (
    <div>
      <p>{task.task}</p>
      <div>
        <BtnTag>
          <button onClick={() => editTask(task.id)}>Edit</button>
        </BtnTag>
        <BtnTag>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </BtnTag>
      </div>

    </div>
  )
}

export default Task

const BtnTag = styled.button`
  background: #a51b31;
  color: #fff;
  border: none;
  padding: 0.55rem;
  cursor: pointer; 
`
