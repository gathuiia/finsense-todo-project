import React from "react";
import { styled } from "styled-components";
import TaskWrapper from "./components/TaskWrapper";
// import Task from "./components/Task";

// import './App.css'

function App() {

  return (
    <>
      <AppTag>
        <AppTitle> Get things Done! </AppTitle>
        <TaskWrapper />
      </AppTag>
    </>
  );
}

export default App;

const AppTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #fff;
`

const AppTag = styled.div`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: #212121;

`