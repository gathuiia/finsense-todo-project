import React from "react";
import TaskWrapper from "./components/TaskWrapper";
import './App.css'
import Task from "./components/Task";

function App() {

  return (
    <div className="App">
      <h1 className="task-title">To-Do</h1>
      <TaskWrapper />
    </div>
  );
}

export default App;