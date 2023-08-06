import React, { MouseEventHandler } from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type Task = {
  id: number;
  title: string;
  desc: string;
  status: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const addTask = (title: string, desc: string): void => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: title,
        desc: desc,
        status: false,
      },
    ]);
  };

  const deleteTask = (id: number) => {
    const taskIndexToDelete: number = tasks.findIndex((t) => t.id === id);
    if (tasks[taskIndexToDelete] == undefined)
      throw new Error("Задача для удаления не найдена");
    tasks.splice(taskIndexToDelete, 1);
  };

  const updateTask = () => {};

  const changeTaskStatus = () => {};

  //handlers
  const handleAddTaskClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addTask(title1, desc1);
  };

  const handleDeleteTaskClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

  };

  // 

  //test task
  const title1: string = 'title1';
  const desc1: string = 'desc1';

  return (
    <div className="App">
      <h1>privet ts react app</h1>

      <button onClick={handleAddTaskClick}>add task</button>

      <p>{JSON.stringify(tasks)}</p>

      <form>
        
      </form>
    </div>
  );
}

export default App;
