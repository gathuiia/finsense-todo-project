import React from 'react'
import styled from 'styled-components'

function Task() {
  return (
    <div>
      <CustomTag>
        Task
      </CustomTag>
    </div>
  )
}

export default Task

const CustomTag = styled.h1`
color: #fafafa;
`