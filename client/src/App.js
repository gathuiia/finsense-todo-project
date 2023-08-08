import React from "react";
import { styled } from "styled-components";
import TaskWrapper from "./components/TaskWrapper";

function App() {

  return (
    <>
      <AppTag>
        <TaskWrapper />
      </AppTag>
    </>
  );
}

export default App;

const AppTag = styled.div`
  height: 100rem;
  width: 100%;
  box-sizing: border-box;
  background-color: #212121;
`