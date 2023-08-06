import React, { MouseEventHandler } from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AddTask } from "./components/AddTask/AddTask";
import { DeleteTask } from "./components/DeleteTask/DeleteTask";

type Task = {
  id: number;
  title: string;
  desc: string;
  status: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const updateTask = () => {};

  const changeTaskStatus = () => {};

  return (
    <div className="App">
      <h1>privet ts react app</h1>

      <AddTask tasks={tasks} setTasks={setTasks} />

      <p>{JSON.stringify(tasks)}</p>

      <DeleteTask tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
