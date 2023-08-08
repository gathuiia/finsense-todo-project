import React from 'react'
import styled from 'styled-components'

function TaskList({ list, editList, deleteList }) {
  return (
    <div>
      <p>{list.list}</p>
      <div>
        <BtnTag>
          <button onClick={() => editList(list.id)}>Edit</button>
        </BtnTag>
        <BtnTag>
          <button onClick={() => deleteList(list.id)}>Delete</button>
        </BtnTag>
      </div>

    </div>
  )
}

export default TaskList

const BtnTag = styled.button`
  background: #a51b31;
  color: #fff;
  border: none;
  padding: 0.55rem;
  cursor: pointer; 
`